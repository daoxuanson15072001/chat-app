import React, { useEffect, useState } from "react";
import { data } from "../../data";
import "./chat.scss";
import { ChatBody } from "./components/ChatBody/ChatBody";
import { ChatHeader } from "./components/ChatHeader/ChatHeader";
import { socket } from "../../socketManager";

export const Chat = ({ userId }: any) => {
  useEffect(() => {
    function onConnect() {
      console.log(`${socket.id} da ket noi toi ban`);
    }

    function onDisconnect() {
      console.log(`${socket.id} da bi ngat ket noi`);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
  }, []);

  const dataChat = data.find((item) => item.id === +userId);
  return (
    <div className="chat_container">
      <ChatHeader props={dataChat}></ChatHeader>
      <ChatBody roomId={userId}></ChatBody>
    </div>
  );
};
