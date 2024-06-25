import { DeleteButton } from "@/src/components/DeleteButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { api } from "@/src/services/api";
import { useEffect, useState } from "react";
import LayoutMain from "../../../components/LayoutMain";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";

const Page = () => {
  const [users, setUsers] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/user/${id}`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LayoutMain selected={"/user/list"}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>nome</TableHead>
            <TableHead>cpf</TableHead>
            <TableHead>perfil</TableHead>
            <TableHead>action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>
                  <div className="flex gap-3 justify-center">
                    <DeleteButton
                      onContinue={() => {
                        deleteUser(item.id);
                      }}
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Atualizar</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Atualizar usuário</DialogTitle>
                          <DialogDescription>
                            Depois de atualizar o usuário clique em salvar
                          </DialogDescription>
                        </DialogHeader>
                        <UserForm formId={"update"} user={item} />
                        <DialogFooter>
                          <DialogClose>
                            <Button>Cancelar</Button>
                          </DialogClose>
                          <Button form="update" type="submit">
                            Salvar
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </LayoutMain>
  );
};

export default Page;

const UserForm = ({ user, formId, preventDefault = false }) => {
  const [name, setName] = useState(user?.name ?? "");
  const [cpf, setCpf] = useState(user?.cpf ?? "");
  const [password, setPassword] = useState(user?.password ?? "");
  const [role, setRole] = useState(user?.role ?? "");

  const updateUser = async () => {
    try {
      console.log({ id: user.id, name, cpf, password, role })
      await api.put("/user", { id: user.id, name, cpf, password, role });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (event) => {
    if (preventDefault) {
      event.preventDefault();
    }
    await updateUser();
  };

  return (
    <form id={formId} onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
      <Label>
        Nome
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
      <Label>
        CPF
        <Input
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </Label>
      <Label>
        Senha
        <Input
          required
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
  );
};