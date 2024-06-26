import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useAuth } from "@/src/context/Auth/auth";

const NavigationBar = ({ selected }) => {
  const { currentUser } = useAuth();

  return (
    <nav className="p-5 flex flex-col gap-2 h-full bg-gray-400">
      {currentUser.role == "admin" ? (
        <Button to={"/user/create"} selected={selected}>
          Criar usuário
        </Button>
      ) : null}
      {currentUser.role == "admin" ? (
        <Button to={"/user/list"} selected={selected}>
          Gerenciar usuários
        </Button>
      ) : null}
      {currentUser.role == "admin" ? (
        <Button to={"/parcel/create"} selected={selected}>
          Cadastrar uma encomenda
        </Button>
      ) : null}
      <Button to={"/parcel/list"} selected={selected}>
        Gerenciar uma encomenda
      </Button>
      {currentUser.role == "admin" ? (
        <Button to={"/recipient/create"} selected={selected}>
          Cadastrar destinatário
        </Button>
      ) : null}
      {currentUser.role == "admin" ? (
        <Button to={"/recipient/list"} selected={selected}>
          Gerenciar destinatários
        </Button>
      ) : null}
    </nav>
  );
};

export default NavigationBar;

const Button = ({ children, to, selected, className }) => {
  return (
    <Link
      to={to}
      className={twMerge(
        "p-4 rounded-md bg-gray-100 text-center text-black font-bold",
        selected == to ? "border-2 border-yellow-600" : "border-2",
        className
      )}
    >
      {children}
    </Link>
  );
};
