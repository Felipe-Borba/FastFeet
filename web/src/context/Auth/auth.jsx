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
  const [healthCheck, setHealthCheck] = useState("failure");
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
    sessionStorage.setItem(
      "@FastFeet:user",
      JSON.stringify(response.data.user)
    );
    navigate("/parcel/list");
  };

  const logout = async () => {
    await api.post("/user/signOut");
    sessionStorage.removeItem("@FastFeet:token");
    sessionStorage.removeItem("@FastFeet:user");
    setCurrentUser();
    api.defaults.headers.common.Authorization = undefined;
    navigate("/");
  };

  useEffect(() => {
    const id = setInterval(() => {
      setHealthCheck("pending");
      api
        .get("/wealth-check")
        .then((response) => {
          if (response.status <= 300) {
            setHealthCheck("success");
          } else {
            setHealthCheck("failure");
          }
        })
        .catch(() => {
          setHealthCheck("failure");
        });
    }, 10000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    apiMiddlewares();

    const token = sessionStorage.getItem("@FastFeet:token");
    const userString = sessionStorage.getItem("@FastFeet:user");

    if (userString) {
      setCurrentUser(JSON.parse(userString));
    }

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <AuthCtx.Provider value={{ login, currentUser, healthCheck, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
