import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir atributos del state.
export interface AuthState {
  isLoggedIn: boolean;
  username?: string,
  favoriteIcon?: string;
}

// Definir estado inicial.
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// Definir el contexto para los hijos, cómo luce y cómo lo expone.
export interface AuthContextProps {
  authState: AuthState,
  signIn: () => void,
  logOut: () => void,
  changeFavIcon: ( iconName: string ) => void,
  
}


// Crear AuthContext.
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ( { children }:any ) => {

  const [ authState, dispatch ] = useReducer( authReducer, authInitialState );
  
  const signIn = () => {
    dispatch({ type: 'signIn' })
  };

  const logOut = () => {
    dispatch({ type: 'logOut' })
  };

  const changeFavIcon = ( iconName: string ) => {
    dispatch({ type: 'changeFavIcon', payload: iconName })
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logOut,
      changeFavIcon
    }}>
      { children }
    </AuthContext.Provider>
  );
}