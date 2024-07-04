import "./NotificationList.css";
import { useNotificationContext } from "../../contexts/NotificationContext";
import AddNotificationForm from "../AddNotificationForm/AddNotificationForm";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function NotificationList() {
  const { notifications } = useNotificationContext();
  useEffect(() => {
    toast.success("Notifications updated succesfully");
  }, [notifications]);
  return (
    <>
      <AddNotificationForm />
      <ul className="notificationList">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id.toString()}
            notification={notification}
          />
        ))}
      </ul>
      <ToastContainer />
    </>
  );
}
