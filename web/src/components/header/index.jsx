import { useAuth } from "@/src/context/Auth/auth";
import Logo from "../../assets/FastFeetLogo2.png";
import { LogoutButton } from "../LogoutButton";
import "./header.css";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const { currentUser, healthCheck } = useAuth();

  return (
    <header
      className={
        "w-full flex bg-[#ffa500] h-[15vh] items-center justify-between p-2 px-5"
      }
    >
      <div className="flex gap-1 justify-center items-center">
        <div
          className={twMerge(
            "h-2 w-2 rounded-full",
            healthCheck ? "bg-green-600" : "bg-red-600"
          )}
        ></div>
        {currentUser?.name ? <p>Bem vindo {currentUser?.name}</p> : null}
      </div>

      <div>
        <img src={Logo} alt="logo" className="h-[70px]" />
      </div>

      <div>
        <LogoutButton />
      </div>
    </header>
  );
}
