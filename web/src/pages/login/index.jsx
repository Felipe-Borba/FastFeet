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
      <h1 className="titulo-principal">Bem-vindo de volta!</h1>
      <section>
        <div id="LoginForm">
          <form onSubmit={handleLogin}>
            <label>
              CPF
              <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <label>
              Senha
              <input value={senha} onChange={(e) => setSenha(e.target.value)} />
            </label>
            <div id="button-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
