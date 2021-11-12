import { useEffect, useRef, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from "../interfaces/reqRes";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([])

  const pageRef = useRef(1);

  useEffect( () => {
    // Call to API
    loadUsers();
  }, [])

  const loadUsers = async () => {
    try {
      const resp = await reqResApi.get<ReqResList>('/users', {
        params: {
          page: pageRef.current
        }
      });
      console.log(pageRef.current);
      
      
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
  const renderItem = ({ id, avatar, first_name, last_name, email }: User) => {
    return (
      <tr key={ id.toString() }>
        <td>
          <img 
            src={ avatar }
            alt={ first_name }
            style={{
              width: 120,
              borderRadius: 100
            }}
          />
        </td>
        <td>{ first_name } { last_name}</td>
        <td>{ email }</td>
      </tr>
    );
  }


  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( renderItem )
          }
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={ loadUsers }
      >
        Siguientes
      </button>
    </>
  )
}
