import Header from "../../../components/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./parcel.css";
import { api } from "../../../services/api";
import LayoutMain from "../../../components/LayoutMain";

export default function CreateParcel() {
  const [cep, setCep] = useState("");
  const [status, setStatus] = useState("");
  const [codigorastreio, setCodigoRastreio] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("");

  const handleCreateParcel = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/parcel/", { cep, status, codigorastreio, tipoEntrega });
      // TODO: Add header api.defaults.headers if necessary
      // console.log(response.status);
      // console.log(response.data);
      // TODO: Redirecionar para a tela da encomenda criada ou outra ação apropriada
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
   <LayoutMain>
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
              <input value={codigorastreio} onChange={(e) => setCodigoRastreio(e.target.value)} />
            </label>
            <label>
              Tipo de Entrega
              <input value={tipoEntrega} onChange={(e) => setTipoEntrega(e.target.value)} />
            </label>
            <div className="button-container">
              <button type="submit" onClick={handleClear}>Criar Encomenda</button>
            </div>
          </form>
        </div>
   </LayoutMain>
  );
}