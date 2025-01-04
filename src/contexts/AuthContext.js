"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { getUserByEmail } from "@/services/apiUsers";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getLoggedInToken() {
      try {
        const res = await axios.get("/api/auth/signin");
        const data = res.data;
        const token = data.token;

        console.log(token.email, "waya");

        if (token) {
          const user = await getUserByEmail(token.email);
          setLoggedInUser(user);
          setIsLoggedIn(true);
          console.log("waaaaa!!!");
        }
      } catch (err) {
        console.error(err.message);
        throw err;
      }
      // finally {
      //   setLoading(false);
      // }
    }

    getLoggedInToken();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // 或者可以返回一个 loading spinner
  // }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser }}
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
