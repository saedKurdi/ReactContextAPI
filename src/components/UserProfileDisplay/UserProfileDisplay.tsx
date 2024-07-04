import { useState } from "react";
import { useUsersContext } from "../../contexts/UserContext";
import EditUserProfileForm from "../EditUserProfileForm/EditUserProfileForm";

export default function UserProfileDisplay() {
  const { user } = useUsersContext();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="display-user">
      {isEdit ? (
        <EditUserProfileForm />
      ) : (
        <>
          <h1>User info below</h1>
          <p>Name : {user.name}</p>
          <p>Surname : {user.surname}</p>
          <p>Email : {user.email}</p>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit User
          </button>
        </>
      )}
    </div>
  );
}
