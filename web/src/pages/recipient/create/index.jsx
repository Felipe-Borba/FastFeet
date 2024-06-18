import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

const CreateRecipient = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    await api.post("/recipient", { name });
    navigate(-1);
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <label>
          Nome
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CreateRecipient;
