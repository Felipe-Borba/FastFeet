import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import Header from "../../../components/header";
import "./listparcel.css"

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
    <main id="list-parcel">
        <Header />
      <div className="flex gap-3">
        <h1>Encomenda</h1>
        <Link to="/parcel/create">Cadastrar</Link>
      </div>

      <div className="flex flex-col gap-3">
        {parcel.map((a) => {
          return (
            <div
              key={a.id}
              className="bg-gray-500 flex gap-4 p-2 justify-between"
            >
              {a.name}
              <button
                className="bg-red-500 p-1 rounded-md"
                onClick={() => deleteParcel(a.id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ListParcel;
