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
            <TableHead>nome</TableHead>
            <TableHead>action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipient.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
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
                            deleteRecipient(item.id);
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

export default ListRecipient;
