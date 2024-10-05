import { createContext, useState } from "react";

export const AuthContext = createContext({
  authUser: null,
  setAuthUser: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user-info")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
