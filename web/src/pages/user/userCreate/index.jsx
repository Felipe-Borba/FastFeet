import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/LayoutMain";
import { api } from "../../../services/api";
import "./user.css";

export default function UserCreate() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleUserCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post("/user", { name, cpf, password, role });
      navigate("/user/list");
    } catch (error) {
      console.log(error.message);
      alert("Algum erro");
    }
  };

  return (
    <Layout id="create-user" selected={"/user/create"}>
      <section>
        <h1 className="titulo-principal">Criar usuário</h1>
        <div id="UserCreateForm">
          <form onSubmit={handleUserCreate}>
            <Label>
              Nome
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Label>

            <Label>
              CPF
              <Input value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </Label>

            <Label>
              Senha
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>

            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um perfil" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Perfil</SelectLabel>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="entregador">Entregador</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="button-container">
              <Button type="submit">Registrar</Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
