import "./NotificationItem.css";
import { Notification } from "../../types/Notification";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  notification: Notification;
}

export const NotificationItem: React.FC<Props> = ({ notification }) => {
  return (
    <li className="notification">
      <p>ID - {notification.id}</p>
      <p>Title - {notification.title}</p>
      <p>Type - {notification.type}</p>
    </li>
  );
};
