import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = (initialState: User[]) => {

  const [users, setUsers] = useState<User[]>(initialState)

  const pageRef = useRef(1);

  useEffect( () => {
    loadUsers();
  }, []);
  
  const loadUsers = async () => {
    try {
      const resp = await reqResApi.get<ReqResList>('/users', {
        params: {
          page: pageRef.current
        }
      });      
      
      if( resp.data.data.length > 0 ) {
        setUsers( resp.data.data );
        pageRef.current++;
      } else {
        alert('No hay más registros');
      }

    } catch (error) {
      console.log(error);
    }
  }

  return {
    users,
    loadUsers,
  }
}