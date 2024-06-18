import Header from "../../components/header";
import { useState } from "react";
import "./parcel.css";
import { api } from "../../services/api";

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

  const handleCancel = () => {
    // Handle the cancel action, e.g., clearing the form or redirecting to another page
    setCep("");
    setStatus("");
    setCodigoRastreio("");
    setTipoEntrega("");
  };

  return (
    <main id="create-parcel">
      <Header />
      <section>
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
              <button type="submit">Criar Encomenda</button>
              <button type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
