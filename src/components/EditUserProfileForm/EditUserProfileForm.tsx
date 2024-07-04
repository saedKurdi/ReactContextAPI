import { ChangeEvent, useState } from "react";
import { useUsersContext } from "../../contexts/UserContext";
import { toast, ToastContainer } from "react-toastify";
import UserProfileDisplay from "../UserProfileDisplay/UserProfileDisplay";

export default function EditUserProfileForm() {
  const { user, editUser } = useUsersContext();
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [back, setBack] = useState(false);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "surname") {
      setSurname(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <>
      {back ? (
        <UserProfileDisplay />
      ) : (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editUser(name, surname, email, password);
              toast.success("User was updated !");
            }}
            className="edit-user"
          >
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              value={name}
              placeholder="Enter Name"
            />
            <input
              name="surname"
              type="text"
              onChange={handleOnChange}
              value={surname}
              placeholder="Enter Surname"
            />
            <input
              name="email"
              type="email"
              onChange={handleOnChange}
              value={email}
              placeholder="Enter Email"
            />
            <input
              name="password"
              type="text"
              onChange={handleOnChange}
              value={password}
              placeholder="Enter Password"
            />
            <button type="submit">Update User</button>
          </form>
          <button
            onClick={() => {
              setBack(true);
            }}
          >
            Go Back
          </button>
          <ToastContainer />
        </>
      )}
    </>
  );
}
