import { useEffect, useState } from "react";
import { api } from "../services/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SelectReceiver({ receiverId, setReceiverId }) {
  const [receivers, setReceivers] = useState([]);

  const load = async () => {
    try {
      const response = await api.get("/recipient");
      setReceivers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Select value={receiverId} onValueChange={setReceiverId}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um usuário" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Usuário</SelectLabel>
          {receivers.map((item) => {
            return (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
