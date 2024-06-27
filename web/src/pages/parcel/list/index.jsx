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
import { Input } from "@/src/components/ui/input";
import { Card } from "@/src/components/ui/card";
import { Search } from "lucide-react";


const ListParcel = () => {
  const [parcel, setParcel] = useState([]);
  const [filteredParcel, setFilteredParcel] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilter = () => {
    if (searchQuery) {
      const filteredData = parcel.filter((item) =>
        item.receiver.name.toLowerCase().includes(searchQuery)
      );
      setFilteredParcel(filteredData);
    } else {
      setFilteredParcel(parcel);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [searchQuery]);

  const displayedData = filteredParcel.length > 0 ? filteredParcel : parcel;

  return (
    <LayoutMain selected={"/parcel/list"}>
      <Card className="self-start">
        <div className="flex items-center">
          <Search size={20} style={{ marginRight: '5px' }} />
          <Input
            placeholder={"destinatario"}
            onChange={handleSearchChange}
            value={searchQuery}
          />
        </div>
      </Card>
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
          {displayedData.map((item) => {
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

                    {item.status === "pendente" ? (
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

                    {item.status === "pendente" ? (
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
