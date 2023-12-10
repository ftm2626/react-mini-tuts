import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
export type UserT = {
  name: string;
  email: string;
};

export interface UserContextInterface {
  user: UserT;
  setUser: Dispatch<SetStateAction<UserT>>;
}
const initState = {
  user: {
    name: "",
    email: "",
  },
  setUser: (user: UserT) => {},
} as UserContextInterface;

// export const UserContext = createContext<Partial<UserContextInterface>>({}); // partial -> make it okay if the init state is empty
export const UserContext = createContext<UserContextInterface>(initState);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserT>({
    name: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

