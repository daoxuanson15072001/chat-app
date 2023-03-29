import { Chat } from "../Component/Chat/Chat";
import { Message } from "../Component/Message/Message";
import { useParams } from "react-router-dom";
import "./chatPage.scss";

function ChatPage() {
  let { roomId } = useParams();
  return (
    <div className="chat_page">
      <Message userId={roomId}></Message>
      <Chat userId={roomId}></Chat>
    </div>
  );
}

export default ChatPage;
