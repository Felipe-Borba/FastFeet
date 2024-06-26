import { DeleteButton } from "@/src/components/DeleteButton";
import { Button } from "@/src/components/ui/button";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { useAuth } from "@/src/context/Auth/auth";
import { useEffect, useState } from "react";
import LayoutMain from "../../../components/LayoutMain";
import { api } from "../../../services/api";
import { ParcelForm } from "../create";

const ListParcel = () => {
  const [parcel, setParcel] = useState([]);
  const { currentUser } = useAuth();

  const fetch = async () => {
    try {
      const response = await api.get("/parcel");
      // console.log(response.data);
      setParcel(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const deleteParcel = async (id) => {
    try {
      await api.delete(`/parcel/${id}`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  const deliveryParcel = async (id) => {
    try {
      await api.post(`/parcel/${id}/delivered`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  const returnParcel = async (id) => {
    try {
      await api.post(`/parcel/${id}/return`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  const cancelParcel = async (id) => {
    try {
      await api.post(`/parcel/${id}/cancel`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LayoutMain selected={"/parcel/list"}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>CEP</TableHead>
            <TableHead>Destinatário</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Entregador</TableHead>
            <TableHead>Código de Rastreio</TableHead>
            <TableHead>TipoEntrega</TableHead>
            <TableHead>Opção</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcel.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.cep}</TableCell>
                <TableCell>{item.receiver.name}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.responsible.name}</TableCell>
                <TableCell>{item.codigorastreio}</TableCell>
                <TableCell>{item.tipoEntrega}</TableCell>
                <TableCell>
                  <div className="flex gap-2 justify-center">
                    {currentUser.role === "admin" && (
                      <DeleteButton
                        onContinue={() => {
                          deleteParcel(item.id);
                        }}
                      />
                    )}

                    {item.status === "pendente"  ? (
                      <Button
                        onClick={() => {
                          deliveryParcel(item.id);
                        }}
                      >
                        Entregar
                      </Button>
                    ) : null}

                    {item.status === "entregue" ? (
                      <Button
                        onClick={() => {
                          returnParcel(item.id);
                        }}
                      >
                        Devolver
                      </Button>
                    ) : null}

                    {item.status === "pendente"  ? (
                      <Button
                        onClick={() => {
                          cancelParcel(item.id);
                        }}
                      >
                        Cancelar
                      </Button>
                    ) : null}

                    <Dialog>
                      <DialogTrigger asChild>
                        {currentUser.role === "admin" && (
                          <Button variant="outline">Atualizar</Button>
                        )}
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Atualizar usuário</DialogTitle>
                          <DialogDescription>
                            Depois de atualizar o usuário clique em salvar
                          </DialogDescription>
                        </DialogHeader>
                        <ParcelForm formId={"update"} parcel={item} />
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

export default ListParcel;
