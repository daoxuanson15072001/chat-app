import React from "react";
import "./chatHeader.scss";
import { MdCall, MdSearch, MdOutlineMoreVert } from "react-icons/md";

export const ChatHeader = ({ props }: any) => {
  return (
    <div className="chat_header">
      <div className="chat_header_avatar">
        <img src={props?.avatar}></img>
      </div>
      <div className="chat_header_name">
        <span>{props?.userName}</span>
        <span>{props?.time}</span>
      </div>
      <div className="chat_header_icon">
        <MdSearch className="icon"></MdSearch>
        <MdCall className="icon"></MdCall>
        <MdOutlineMoreVert className="icon"></MdOutlineMoreVert>
      </div>
    </div>
  );
};
