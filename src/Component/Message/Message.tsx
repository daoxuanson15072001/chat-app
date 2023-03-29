import React, { useEffect, useState } from "react";
import "./message.scss";
import { MdMenu, MdSearch } from "react-icons/md";
import { IDataMessage, UserMessage } from "./components/UserMessage";
import { data } from "../../data";
import axios from "axios";
import { API } from "api";
import Cookie from "js-cookie";
import moment from "moment";
export const Message = ({ userId }: any) => {
  const [room, setRoom] = useState<IDataMessage[]>([]);
  const token = Cookie.get("token");
  useEffect(() => {
    axios
      .get(`${API.RoomHistory}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        const data = result.data as any[];
        const dataRoom = data.map((item) => {
          return {
            timeLine: moment(item.time).format("HH:mm"),
            ...item,
          };
        });
        setRoom(dataRoom);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="message_container">
      <div>
        <div className="message_header">
          <div className="menu">
            <MdMenu style={{ fontSize: 24 }}></MdMenu>
          </div>
          <div className="search">
            <MdSearch className="search_icon"></MdSearch>
            <input placeholder="Search"></input>
          </div>
        </div>
        <div className="message_list">
          {room.map((item, index) => {
            if (item?.content.length < 30)
              return (
                <UserMessage
                  key={index}
                  avatar={item?.avatar}
                  name={item?.name}
                  content={item?.content}
                  timeLine={item?.timeLine}
                  // newMessage={item?.newMessage}
                  _id={item._id}
                ></UserMessage>
              );
            else
              return (
                <UserMessage
                  key={index}
                  avatar={item?.avatar}
                  name={item?.name}
                  content={`${item?.content.slice(0, 30)}     ` + "....."}
                  timeLine={item?.timeLine}
                  // newMessage={item?.newMessage}
                  _id={item._id}
                ></UserMessage>
              );
          })}
        </div>
      </div>
    </div>
  );
};
