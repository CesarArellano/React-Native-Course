import { useReducer } from "react"

interface AuthState {
  validating: boolean,
  token: string | null,
  username: string,
  name: string
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: '',
  name: ''
};

type AuthAction = { type: 'logout' }

const authReducer = ( state: AuthState, action:AuthAction ): AuthState => {

  switch(action.type) {
    default:
      return state;
  }
  

}

export const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-info">
        Validando...
      </div>
      <div className="alert alert-danger">
        No autenticado...
      </div>
      <div className="alert alert-success">
        Autenticado...
      </div>

      <button 
        className="btn btn-primary"
        style={{
          marginRight: 10
        }}
      >
        Login
      </button>

      <button 
        className="btn btn-danger"
      >
        Logout
      </button>
    </>
  )
}
