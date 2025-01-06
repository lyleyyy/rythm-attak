"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { getUserByEmail } from "@/services/apiUsers";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authContextLoading, setAuthContextLoading] = useState(true);

  useEffect(
    function () {
      async function getLoggedInToken() {
        try {
          const res = await axios.get("/api/auth/signin");

          const data = res.data;
          const token = data.token;

          if (token) {
            const user = await getUserByEmail(token.email);
            setLoggedInUser(user);
            setIsLoggedIn(true);
          }
        } catch (err) {
          if (err.status === 401) return;
          console.error(err.message);
          // throw err;
        } finally {
          setAuthContextLoading(false);
        }
      }

      getLoggedInToken();
    },
    [isLoggedIn],
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loggedInUser,
        setLoggedInUser,
        authContextLoading,
        setAuthContextLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) return;
  return context;
}

export { AuthProvider, useAuth };
