import Header from "../../components/header";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/signIn", { cpf, password: senha });

      const token = response.data.token;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      sessionStorage.setItem("@FastFeet:token", token);

      navigate("/parcel/list");
    } catch (error) {
      alert("Usuário ou senha inválido");
    }
  };

  return (
    <main id="login">
      <Header />
      <section>
        <form onSubmit={handleLogin}>
          <label>
            Cpf
            <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </label>

          <label>
            Senha
            <input value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
