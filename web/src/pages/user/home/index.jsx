import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";

const Page = () => {
  const [user, setUser] = useState(null);

  const fetch = async () => {
    const response = await api.get("/user/me");
    setUser(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="w-ful h-full">
      <div className="bg-yellow-300 px-3 py-5">
        <h2>Bem vindo {user?.name}</h2>
      </div>
      <div className="flex">
        <nav className="p-3 flex flex-col gap-2 bg-yellow-300">
          <Link to={"/user/create"}>Criar usuário</Link>
          <Link to={"/parcel/create"}>Cadastrar uma encomenda</Link>
          <Link to={"/recipient/list"}>Gerenciar destinatários</Link>
        </nav>
        <div>tabela de produtos</div>
      </div>
    </div>
  );
};

export default Page;
