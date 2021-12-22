import { AuthState } from "./AuthContext";

type AuthAction = 
  | { type: 'signIn' }
  | { type: 'logOut' }
  | { type: 'changeFavIcon', payload: string }

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
  
  switch ( action.type ) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'César',
      };
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        favoriteIcon: undefined,
        username: undefined,
      }
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      };
    default:
      return state;
  }
}