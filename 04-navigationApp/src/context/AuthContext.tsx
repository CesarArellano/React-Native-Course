import React, { createContext } from "react";

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
}


// Crear AuthContext.
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ( { children }:any ) => {
  return (
    <AuthContext.Provider value={{
      authState: authInitialState,
      signIn: () => {}
    }}>
      { children }
    </AuthContext.Provider>
  );
}