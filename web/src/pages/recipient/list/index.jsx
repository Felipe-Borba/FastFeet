import { DeleteButton } from "@/src/components/DeleteButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { useEffect, useState } from "react";
import LayoutMain from "../../../components/LayoutMain";
import { api } from "../../../services/api";
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
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";

const ListRecipient = () => {
  const [recipient, setRecipient] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get("/recipient");
      setRecipient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecipient = async (id) => {
    try {
      await api.delete(`/recipient/${id}`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LayoutMain selected={"/recipient/list"}>
      <h1>Destinatários</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Opção</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipient.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <div className="flex gap-3 justify-center">
                    <DeleteButton
                      onContinue={() => {
                        deleteRecipient(item.id);
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

export default ListRecipient;

const UserForm = ({ user, formId, preventDefault = false }) => {
  const [name, setName] = useState(user?.name ?? "");

  const updateUser = async () => {
    try {
      await api.put("/recipient", { id: user.id, name });
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
    <form id={formId} onSubmit={handleSubmit}>
      <Label>
        Nome
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
    </form>
  );
};
