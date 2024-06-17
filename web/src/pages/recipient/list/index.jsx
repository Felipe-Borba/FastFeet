import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const ListRecipient = () => {
  const [recipient, setRecipient] = useState([]);

  const fetch = async () => {
    const response = await api.get("/recipient");
    setRecipient(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main>
      <div>
        {recipient.map((a) => {
          return <div key={a.id}>{a.name}</div>;
        })}
      </div>
    </main>
  );
};

export default ListRecipient;
