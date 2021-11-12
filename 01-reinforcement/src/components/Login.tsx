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

type LoginPayload = {
  username: string,
  name: string
};

type AuthAction = 
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action:AuthAction ): AuthState => {

  switch(action.type) {
    case 'login':
      const { username, name } = action.payload;
      return {
        validating: false,
        token: 'ABC123',
        username,
        name        
      };
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

  const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout'});
    }, 1500)
    
  }, []);

  const handleLogin = () => {
    dispatch({
      type: 'login',
      payload: {
        username: 'RayWayDay',
        name: 'César Arellano'
      }
    });
  }

  const handleLogout = () => {
    dispatch({
      type: 'logout',
    });
  }

  if( validating ) {
    return <LoadingIndicator />
  }

  return (
    <>
      <h3>Login</h3>
      {
        (token)
        ? <div className="alert alert-success"> Autenticado como { name } </div>
        : <div className="alert alert-danger"> No autenticado... </div>
      }

      {
        (token)
        ? (
          <button 
            className="btn btn-danger"
            onClick={ handleLogout }
          >
            Logout
          </button>
        )
        : (
          <button 
            className="btn btn-primary"
            onClick={ handleLogin }
            style={{
              marginRight: 10
            }}
          >
            Login
          </button>
        )
      }
    </>
  )
}
