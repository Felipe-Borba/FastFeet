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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

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
      console.log(error);
      alert(error.response.data);
    }
  };

  return (
    <Layout id="create-user" selected={"/user/create"}>
      <Card>
        <CardHeader>
          <CardTitle>Usuário</CardTitle>
          <CardDescription>Crie um novo usuário</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="form"
            onSubmit={handleUserCreate}
            className="flex flex-col gap-4 w-80"
          >
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

            <Label>
              Perfil
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
            </Label>
          </form>
        </CardContent>
        <CardFooter>
          <Button form="form" type="submit">
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
