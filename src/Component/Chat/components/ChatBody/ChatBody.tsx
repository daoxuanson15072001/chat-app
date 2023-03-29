import React, { useState, useEffect } from "react";
import "./chatBody.scss";
import { MdMenu, MdSearch, MdSend } from "react-icons/md";
import { BsCheckLg, BsEmojiSmile } from "react-icons/bs";
import moment from "moment";
import { socket } from "../../../../socketManager";
import { useParams } from "react-router-dom";
import { API, getMyProfile, host } from "api";
import axios from "axios";

interface IHistoryChat {
  roomId: number;
  senderId: number;
  senderType?: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}
export const ChatBody = ({ roomId }: any) => {
  const [chatHistory, setChatHistory] = useState<IHistoryChat[]>([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get(`${host}/room/${roomId}/history`)
      .then((result) => {
        setChatHistory(result?.data);
      })
      .catch((e) => console.log(e));
  }, [roomId]);
  useEffect(() => {
    const handleReceiveMes = (message: any) => {
      setChatHistory([message, ...chatHistory]);
    };
    socket.on("message", handleReceiveMes);
    return () => {};
  }, [chatHistory]);
  const handleEnter = (e: any) => {
    if (e.key === "Enter" && message) {
      const newMessage = {
        content: message,
        roomId: Number(roomId),
        senderId: getMyProfile("profile")?.["id"],
      };
      socket.emit("createMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="chat_body">
      <div className="chat_history">
        {chatHistory.map((item, index) => {
          if (getMyProfile("profile")?.["id"] === item?.senderId) {
            return (
              <div className="message_sender">
                <div className="inner_sender">
                  <div>{item.content}</div>
                  <div>{moment(item.createdAt).format("HH:mm")}</div>
                </div>
              </div>
            );
          } else
            return (
              <div className="message_receive">
                <div className="inner_sender">
                  <div>{item.content}</div>
                  <div>{moment(item.createdAt).format("HH:mm")}</div>
                </div>
              </div>
            );
        })}
      </div>
      <div className="chat_message">
        <BsEmojiSmile className="chat_icon"></BsEmojiSmile>
        <input
          placeholder="Message"
          onKeyDown={handleEnter}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></input>
        <MdSend className="chat_icon"></MdSend>
      </div>
    </div>
  );
};
