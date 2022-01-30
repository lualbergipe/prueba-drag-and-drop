import { useState } from "react";
import { getUsuarios } from "../api/user";


export function useApi() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);


  const getUsers = async () => {
    try {
      setLoading(true);
      console.log("psao");
      const respuesta = await getUsuarios();
      setLoading(false);
      setUsers(respuesta);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
    return {
      loading,
      error,
      users,
      getUsers,
    };

};

