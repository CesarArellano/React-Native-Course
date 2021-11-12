import { useEffect } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResList } from "../interfaces/reqRes";

export const Users = () => {

  useEffect( () => {
    // Call to API
    reqResApi.get<ReqResList>('/users').then((resp) => {
      console.log(resp.data.data[0].email);
      
    }).catch( console.log )
  }, [])

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

        </tbody>
      </table>
    </>
  )
}
