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
                  <DeleteButton
                    onContinue={() => {
                      deleteUser(item.id);
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

export default Page;
