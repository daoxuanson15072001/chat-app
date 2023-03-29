import { host } from "api";
import { io } from "socket.io-client";
export const socket = io(host, {
  autoConnect: true,
});
