import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import "./listparcel.css";
import LayoutMain from "../../../components/LayoutMain";
import "./listparcel.css";

const ListParcel = () => {
  const [parcel, setParcel] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get("/parcel");
      setParcel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteParcel = async (id) => {
    try {
      await api.delete(`/parcel/${id}`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LayoutMain selected={"/parcel/list"}>
      <div className="table-container">
        <table className="parcel-table">
          <thead>
            <tr>
              <th>CEP</th>
              <th>Status</th>
              <th>Código de Rastreio</th>
              <th>Tipo de Entrega</th>
            </tr>
          </thead>
          <tbody>
            {parcel.map((a) => (
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.id}</td>
                <td>{new Date(a.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="bg-red-500 p-1 rounded-md"
                    onClick={() => deleteParcel(a.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutMain>
  );
};

export default ListParcel;
