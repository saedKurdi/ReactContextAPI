import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NotificationContextProvider } from "./contexts/NotificationContext.tsx";
import { UsersContextProvider } from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotificationContextProvider>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </NotificationContextProvider>
  </React.StrictMode>
);
