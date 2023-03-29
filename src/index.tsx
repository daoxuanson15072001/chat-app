import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import { LoginForm } from "./Component/Login/Login";

const router = createBrowserRouter([
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/chat/:roomId",
    element: <ChatPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
