import React from "react";
import "./userMessage.scss";
import { useNavigate } from "react-router-dom";

export interface IDataMessage {
  id: number;
  avatar?: string;
  name?: string;
  content: string;
  timeLine?: string;
  newMessage?: number;
}
export const UserMessage = (props: IDataMessage) => {
  const navigate = useNavigate();
  return (
    <div
      className="message"
      onClick={() => {
        navigate(`/chat/${props.id}`);
      }}
    >
      <div className="message_avatar">
        <img src={props.avatar}></img>
      </div>
      <div className="message_user">
        <div className="message_username">
          <span>{props.name}</span>
          <span className="time">{props.timeLine}</span>
        </div>
        <div className="message_text">
          <span>{props.content}</span>
          {/* <span className="new_message">{props.newMessage}</span> */}
        </div>
      </div>
    </div>
  );
};
