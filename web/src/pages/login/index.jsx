import { useAuth } from "@/src/context/Auth/auth";
import { useState } from "react";
import Header from "../../components/header";
import "./login.css";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ cpf, password: senha });
  };

  return (
    <main id="login">
      <Header />
      <h1 className="titulo-principal">Bem-vindo de volta!</h1>
      <section>
        <div id="LoginForm">
          <form onSubmit={handleLogin}>
            <Label>
              CPF
              <Input
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required="required"
                pattern="[0-9]+$"
                title="(Apenas números são aceitos no campo CPF)"
              />
            </Label>

            <Label>
              Senha
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Label>

            <div id="button-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
