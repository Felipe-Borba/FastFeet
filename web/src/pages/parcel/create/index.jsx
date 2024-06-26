import SelectReceiver from "@/src/components/SelectReceiver";
import SelectUser from "@/src/components/SelectUser";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutMain from "../../../components/LayoutMain";
import { api } from "../../../services/api";

export default function CreateParcel() {
  const [cep, setCep] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("padrao");
  const [userId, setUserId] = useState();
  const [receiverId, setReceiverId] = useState();
  const navigate = useNavigate();

  const handleCreateParcel = async (e) => {
    e.preventDefault();
    try {
      await api.post("/parcel", {
        cep,
        tipoEntrega,
        responsibleId: userId,
        receiverId,
      });

      navigate("/parcel/list");
    } catch (error) {
      alert("Não foi possível cadastrar a encomenda");
    }
  };

  return (
    <LayoutMain selected={"/parcel/create"}>
      <Card>
        <CardHeader>
          <CardTitle>Encomenda</CardTitle>
          <CardDescription>Crie um nova encomenda</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="form"
            onSubmit={handleCreateParcel}
            className="flex flex-col gap-4 w-80"
          >
            <Label>
              CEP
              <Input
                type="number"
                placeholder=""
                alue={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </Label>

            <Label>
              Destinatário
              <SelectReceiver
                receiverId={receiverId}
                setReceiverId={setReceiverId}
              />
            </Label>

            <Label>
              Tipo de Entrega
              <Select value={tipoEntrega} onValueChange={setTipoEntrega}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um tipo de entrega" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Perfil</SelectLabel>
                    <SelectItem value="padrao">Padrão</SelectItem>
                    <SelectItem value="retirada">Retirada</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Label>

            <Label>
              Entregador
              <SelectUser user={userId} setUser={setUserId} />
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
}
