import { createContext, useContext, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const AuthCtx = createContext(null > null);

export function useAuth() {
  const context = useContext(AuthCtx);

  if (!context) {
    throw new Error("AuthContext not loaded!");
  }

  return context;
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@FastFeet:token");
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <AuthCtx.Provider value={{}}>{children}</AuthCtx.Provider>;
}
