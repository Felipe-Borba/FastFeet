import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavigationBar = ({ selected }) => {
  return (
    <navigation className="p-10 flex flex-col gap-2 h-full bg-gray-400">
      <Button to={"/user/create"} selected={selected}>
        Criar usuário
      </Button>
      <Button to={"/parcel/create"} selected={selected}>
        Cadastrar uma encomenda
      </Button>
      <Button to={"/recipient/list"} selected={selected}>
        Gerenciar destinatários
      </Button>
    </navigation>
  );
};

export default NavigationBar;

const Button = ({ children, to, selected, className }) => {
  return (
    <Link
      to={to}
      className={twMerge(
        "p-4 rounded-md bg-gray-100 text-center text-black font-bold",
        selected == to ? "border border-yellow-300" : "",
        className
      )}
    >
      {children}
    </Link>
  );
};
