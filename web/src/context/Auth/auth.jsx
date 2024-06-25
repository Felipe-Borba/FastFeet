import { createContext, useContext, useEffect, useState } from "react";
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
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  const apiMiddlewares = () => {
    api.interceptors.response.use(null, (error) => {
      if (error.response.status === 403) {
        navigate("/", { replace: true });
      }
      return Promise.reject(error);
    });
  };

  const login = async ({ cpf, password }) => {
    const response = await api.post("/user/signIn", { cpf, password });

    const token = response.data.token;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    sessionStorage.setItem("@FastFeet:token", token);

    setCurrentUser(response.data.user);
    navigate("/parcel/list");
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

  return (
    <AuthCtx.Provider value={{ login, currentUser }}>
      {children}
    </AuthCtx.Provider>
  );
}
