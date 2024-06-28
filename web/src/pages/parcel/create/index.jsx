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
  const navigate = useNavigate();

  return (
    <LayoutMain selected={"/parcel/create"}>
      <Card>
        <CardHeader>
          <CardTitle>Encomenda</CardTitle>
          <CardDescription>Crie um nova encomenda</CardDescription>
        </CardHeader>
        <CardContent>
          <ParcelForm
            formId="form"
            preventDefault
            onFinish={() => {
              navigate("/parcel/list");
            }}
          />
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

export const ParcelForm = ({
  parcel,
  onFinish,
  formId,
  preventDefault = false,
}) => {
  const [cep, setCep] = useState(parcel?.cep);
  const [codigorastreio, setCodigorastreio] = useState(parcel?.codigorastreio);
  const [tipoEntrega, setTipoEntrega] = useState(
    parcel?.tipoEntrega ?? "padrao"
  );
  const [responsibleId, setResponsibleId] = useState(parcel?.responsibleId);
  const [receiverId, setReceiverId] = useState(parcel?.receiverId);

  const updateParcel = async () => {
    try {
      await api.put("/parcel", {
        id: parcel.id,
        cep,
        tipoEntrega,
        responsibleId,
        receiverId,
        status: parcel.status,
        codigorastreio: codigorastreio.toUpperCase(),
      });
    } catch (error) {
      console.log(error?.message);
    }
  };

  const createParcel = async () => {
    try {
      await api.post("/parcel", {
        cep,
        tipoEntrega,
        responsibleId,
        receiverId,
      });
    } catch (error) {
      console.log(error?.message);
    }
  };

  const handleSubmit = async (event) => {
    if (preventDefault) {
      event.preventDefault();
    }
    if (parcel?.id) {
      await updateParcel();
    } else {
      await createParcel();
    }
    await onFinish();
  };

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-80"
    >
      <Label>
        CEP
        <Input
          type="number"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </Label>

      <Label>
        Destinatário
        <SelectReceiver receiverId={receiverId} setReceiverId={setReceiverId} />
      </Label>

      {parcel?.status && (
        <Label>
          Status
          <Input
            type="string"
            disabled
            value={parcel.status}
            // onChange={(e) => setStatus(e.target.value)}
          />
        </Label>
      )}

      <Label>
        Entregador
        <SelectUser user={responsibleId} setUser={setResponsibleId} />
      </Label>

      {parcel?.codigorastreio && (
        <Label>
          Código de rastreio
          <Input
            type="string"
            value={codigorastreio.toUpperCase()}
            onChange={(e) => setCodigorastreio(e.target.value)}
          />
        </Label>
      )}

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
    </form>
  );
};
