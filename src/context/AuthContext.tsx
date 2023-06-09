import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type User = {
  email: string;
};

type AuthContext = {
  currentUser: User;
  signup: (email: string, password: string) => Promise<FirebaseUserCredential>;
  login: (email: string, password: string) => Promise<FirebaseUserCredential>;
  logout: () =>  Promise<void>
};

type FirebaseUserCredential = {
  user: firebase.User | null;
  credential: firebase.auth.AuthCredential | null;
};

export const AuthContext = createContext({} as AuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>({ email: "" });

  function signup(
    email: string,
    password: string
  ): Promise<FirebaseUserCredential> {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(
    email: string,
    password: string
  ): Promise<FirebaseUserCredential> {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout(): Promise<void> {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
