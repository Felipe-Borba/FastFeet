import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";

const Page = () => {
  const [user, setUser] = useState(null);

  const fetch = async () => {
    const response = await api.get("/user/me");
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="w-ful h-full">
      <h2>{user?.name}</h2>
      <nav>
        <Link>Crate user</Link>
      </nav>
    </div>
  );
};

export default Page;
