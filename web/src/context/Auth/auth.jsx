import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const apiMiddlewares = () => {
    api.interceptors.response.use(null, (error) => {
      if (error.response.status === 403) {
        navigate("/", { replace: true });
      }
      return Promise.reject(error);
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("@FastFeet:token");
    apiMiddlewares();
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <AuthCtx.Provider value={{}}>{children}</AuthCtx.Provider>;
}
