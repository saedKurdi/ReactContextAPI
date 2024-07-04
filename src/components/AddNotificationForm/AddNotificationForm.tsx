import { ChangeEvent, useState } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { Notification } from "../../types/Notification";
import "./AddNotificationForm.css";
export default function AddNotificationForm() {
  const { notifications, addNotification } = useNotificationContext();
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") setTitle(e.target.value);
    else if (e.target.name === "type") setType(e.target.value);
  };
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const newN: Notification = {
          id: notifications.length + 1,
          title: title,
          type: type,
        };
        title && type ? addNotification(newN) : alert("Enter all info !");
        setTitle("");
        setType("");
      }}
    >
      <input
        onChange={handleOnChange}
        name="title"
        value={title}
        type="text"
        placeholder="Enter Title"
      />
      <input
        onChange={handleOnChange}
        name="type"
        value={type}
        type="text"
        placeholder="Enter Type"
      />
      <button type="submit">Add Notification To Context</button>
    </form>
  );
}
