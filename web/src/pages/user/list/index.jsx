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
                            deleteUser(item.id);
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

export default Page;
