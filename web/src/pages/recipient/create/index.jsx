import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import LayoutMain from "../../../components/LayoutMain";

const CreateRecipient = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    await api.post("/recipient", { name });
    navigate(-1);
  };

  return (
    <LayoutMain>
      <div id="parcel-form-container">
          <form onSubmit={handleCreate}>
            <label>
              Nome
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <div className="button-container">
              <button type="submit">Criar Encomenda</button>
            </div>
          </form>
        </div>
   </LayoutMain>
  );
};

export default CreateRecipient;
