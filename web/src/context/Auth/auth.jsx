import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
  const [token, setToken] = useState("");

  const apiObserver = () => {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      api.defaults.headers.common.Authorization = null;
    }
  }, [token]);

  useEffect(() => {
    console.log(children);
    apiObserver();
    setToken(localStorage.getItem("@FastFeet:token"));
  }, []);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <AuthCtx.Provider value={{}}>{children}</AuthCtx.Provider>;
}
