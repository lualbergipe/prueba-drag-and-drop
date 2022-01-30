import React, {useEffect} from 'react';
import { useApi } from '../hooks/useApi';

const User = () => {
  

const { loading, users, getUsers } = useApi();
console.log("loading ->", loading, "usuarios--->", users);

useEffect(() => getUsers(), []);
    return (
     <p>Hola</p>
    );
}
export default User;