import React, { createContext, FC, useContext, useState } from "react";
import { Notification } from "../types/Notification";

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: number) => void;
};

const NotificationContext = createContext({} as NotificationContextType);

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationContext = () => useContext(NotificationContext);

interface Props {
  children: React.ReactNode;
}

export const NotificationContextProvider: FC<Props> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = (notification: Notification) => {
    setNotifications([...notifications, notification]);
  };

  const removeNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };
  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
