import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import "./listparcel.css";
import LayoutMain from "../../../components/LayoutMain";
import "./listparcel.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            deleteParcel(item.id);
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
