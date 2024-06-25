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
import { Button } from "@/src/components/ui/button";

const ListParcel = () => {
  const [parcel, setParcel] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get("/parcel");
      console.log(response.data);
      setParcel(response.data);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LayoutMain selected={"/parcel/list"}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>cep</TableHead>
            <TableHead>status</TableHead>
            <TableHead>Código de Rastreio</TableHead>
            <TableHead>TipoEntrega</TableHead>
            <TableHead>opção</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcel.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.cep}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.codigorastreio}</TableCell>
                <TableCell>{item.tipoEntrega}</TableCell>
                <TableCell>
                  <div className="flex gap-2 justify-center">
                    <DeleteButton
                      onContinue={() => {
                        deleteParcel(item.id);
                      }}
                    />
                    {item.status !== "entregue" ? (
                      <Button
                        onClick={() => {
                          deliveryParcel(item.id);
                        }}
                      >
                        Entregar
                      </Button>
                    ) : null}
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
