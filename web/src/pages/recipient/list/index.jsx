import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";

const ListRecipient = () => {
  const [recipient, setRecipient] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get("/recipient");
      setRecipient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecipient = async (id) => {
    try {
      await api.delete(`/recipient/${id}`);
      await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main>
      <div className="flex gap-3">
        <h1>Destinatários</h1>
        <Link to="/recipient/create">Cadastrar</Link>
      </div>

      <div className="flex flex-col gap-3">
        {recipient.map((a) => {
          return (
            <div
              key={a.id}
              className="bg-gray-500 flex gap-4 p-2 justify-between"
            >
              {a.name}
              <button
                className="bg-red-500 p-1 rounded-md"
                onClick={() => deleteRecipient(a.id)}
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

export default ListRecipient;
