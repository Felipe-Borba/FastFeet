import Header from "../../../components/header";
import { useState } from "react";
import "./user.css";
import { api } from "../../../services/api";
import Layout from '../../../components/LayoutMain'
import InputSelect from '../../../components/inputSelect'

export default function UserCreate() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleuserCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user", { name, cpf, password, role });
      //TODO add header api.defaults.headers
      console.log(response.status);
      // console.log(response.data);
      //TODO redirecionar para a tela do usuário
    } catch (error) {
      alert("Algum erro");
    }
    console.log(99);
  };
  return (
    <Layout id="create-user">
      <section>
        <div id="UserCreateForm">
          <form onSubmit={handleuserCreate}>
            <label>
              Nome
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              CPF
              <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <label>
              Senha
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <InputSelect></InputSelect>
            <div className="button-container">
              <button type="submit">Registrar</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
