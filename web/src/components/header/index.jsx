import { useEffect, useState } from "react";
import Logo from "../../assets/FastFeetLogo2.png";
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
    <header
      className={
        "w-full flex bg-[#ffa500] h-[15vh] items-center justify-between p-2"
      }
    >
      <div>{user?.name ? <p>Bem vindo {user?.name}</p> : null}</div>

      <div>
        <img src={Logo} alt="logo" className="h-[70px]" />
      </div>

      <div></div>
    </header>
  );
}
