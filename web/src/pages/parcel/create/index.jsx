import { useState } from "react";
import LayoutMain from "../../../components/LayoutMain";
import { api } from "../../../services/api";
import "./parcel.css";

export default function CreateParcel() {
  const [cep, setCep] = useState("");
  const [status, setStatus] = useState("");
  const [codigorastreio, setCodigoRastreio] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("");

  const handleCreateParcel = async (e) => {
    e.preventDefault();
    try {
      await api.post("/parcel/", {
        cep,
        status,
        codigorastreio,
        tipoEntrega,
      });
    } catch (error) {
      alert("Não foi possível cadastrar a encomenda");
    }
  };

  const handleClear = () => {
    setCep("");
    setStatus("");
    setCodigoRastreio("");
    setTipoEntrega("");
  };

  return (
    <LayoutMain selected={"/parcel/create"}>
      <div id="parcel-form-container">
        <form onSubmit={handleCreateParcel}>
          <label>
            CEP
            <input value={cep} onChange={(e) => setCep(e.target.value)} />
          </label>
          <label>
            Status
            <input value={status} onChange={(e) => setStatus(e.target.value)} />
          </label>
          <label>
            Código de Rastreio
            <input
              value={codigorastreio}
              onChange={(e) => setCodigoRastreio(e.target.value)}
            />
          </label>
          <label>
            Tipo de Entrega
            {/* TODO fazer um select */}
            <input
              value={tipoEntrega}
              onChange={(e) => setTipoEntrega(e.target.value)}
            />
          </label>
          {/* TODO add um input para selecionar o responsável pela entrega */}
          <div className="button-container">
            <button type="submit" onClick={handleClear}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </LayoutMain>
  );
}
