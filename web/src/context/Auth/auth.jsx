import { createContext, useContext, useEffect } from "react";
import { api } from "../../services/api";

const AuthCtx = createContext(null > null);

export function useAuth() {
  const context = useContext(AuthCtx);

  if (!context) {
    throw new Error("AuthContext not loaded!");
  }

  return context;
}

export function AuthProvider({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("@FastFeet:token");
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  return <AuthCtx.Provider value={{}}>{children}</AuthCtx.Provider>;
}
