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

export default function SelectUser({ user, setUser }) {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});

  const load = async () => {
    try {
      const response = await api.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Select value={user} onValueChange={setUser}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um usuário" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Usuário</SelectLabel>
          {users.map((item) => {
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
