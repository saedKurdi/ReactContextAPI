import { createContext, FC, useContext, useState } from "react";
import { User } from "../types/User";
type UsersContextType = {
  user: User;

  editUser: (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => void;
};

const UsersContext = createContext({} as UsersContextType);

// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => useContext(UsersContext);

interface Props {
  children: React.ReactNode;
}

export const UsersContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const editUser = (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => {
    setUser({ name, surname, email, password });
  };

  return (
    <UsersContext.Provider value={{ user, editUser }}>
      {children}
    </UsersContext.Provider>
  );
};
