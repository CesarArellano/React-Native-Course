import { useEffect, useReducer } from "react"
import { LoadingIndicator } from './LoadingIndicator';

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
    case 'logout': 
      return {
        validating: false,
        token: null,
        username: '',
        name: ''
      };
    default:
      return state;
  }
  

}

export const Login = () => {

  const [{ validating }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout'});
    }, 1500)
    
  }, []);

  if( validating ) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }

  return (
    <>      
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
