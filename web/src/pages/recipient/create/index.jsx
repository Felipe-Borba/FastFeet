import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import LayoutMain from "../../../components/LayoutMain";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const CreateRecipient = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    await api.post("/recipient", { name });
    navigate("/recipient/list");
  };

  return (
    <LayoutMain selected={"/recipient/create"}>
      <Card>
        <CardHeader>
          <CardTitle>Destinatários</CardTitle>
          <CardDescription>Crie um novo destinatário</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form" onSubmit={handleCreate}>
            <Label>
              Nome
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Label>
          </form>
        </CardContent>
        <CardFooter>
          <Button form="form" type="submit">
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </LayoutMain>
  );
};

export default CreateRecipient;
