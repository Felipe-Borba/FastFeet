import { useEffect, useState } from "react";
import { api } from "../../services/api";
import "./header.css";

export default function Header() {
  const [user, setUser] = useState(null);

  const fetch = async () => {
    const response = await api.get("/user/me");
    setUser(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <header id="header" className={"w-full"}>
      {user?.name ? <p>Bem vindo {user?.name}</p> : null}
      <div className="logo">
        <img src=".\src\assets\FastFeetLogo2.png" alt="logo" />
      </div>
    </header>
  );
}
