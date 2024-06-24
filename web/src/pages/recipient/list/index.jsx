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
                  <DeleteButton
                    onContinue={() => {
                      deleteRecipient(item.id);
                    }}
                  />
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
