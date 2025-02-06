"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { getUserByEmail } from "@/services/apiUser";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isArtist, setIsArtist] = useState(null);
  const [isUserInfoUpdated, setIsUserInfoUpdated] = useState(false);
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
            setIsArtist(user.is_artist);
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
    [isLoggedIn, isUserInfoUpdated],
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loggedInUser,
        isArtist,
        setLoggedInUser,
        authContextLoading,
        setAuthContextLoading,
        isUserInfoUpdated,
        setIsUserInfoUpdated,
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
