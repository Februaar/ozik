import { createContext, useState } from "react";
import { firebaseAuth } from "../firebase-config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userInfo) => {
    setUser(userInfo);
  };

  const logout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        setUser(null);
        window.location.reload();
      })
      .catch((error) => {
        console.log("로그아웃 오류:", error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
