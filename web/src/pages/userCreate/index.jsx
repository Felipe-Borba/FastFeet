import Header from "../../components/header";
import { useState } from "react";
import "./user.css";
import { api } from "../../services/api";

export default function UserCreate() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");


    const handleuserCreate = async (e) =>{ 
        e.preventDefault();
        try {
            const response = await api.post("/user", { name, cpf, password, role });
            //TODO add header api.defaults.headers
            // console.log(response.status);
            // console.log(response.data);
            //TODO redirecionar para a tela do usuário
          } catch (error) {
            alert("Algum erro");
          }
        console.log (99)
    }
    return (
        <main id="create-user">
      <Header />
      <section>
        <form onSubmit={handleuserCreate}>
          <label>
            Nome
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Cpf
            <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </label>
          <label>
            Senha
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Cargo
            <input value={role} onChange={(e) => setRole(e.target.value)} />
          </label>

          <button type="submit">Regiter</button>
        </form>
      </section>
    </main>
    )
}