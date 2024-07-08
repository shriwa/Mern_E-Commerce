import React, { createContext, useState } from "react";
import { useEffect } from "react";
import API from "../API";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("user");
    try {
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("utoken");
    return token || null;
  });

  useEffect(() => {
    console.log("Current user updated", currentUser);
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  useEffect(() => {
    console.log("Token updated", token);
    if (token) {
      localStorage.setItem("utoken", token);
    } else {
      localStorage.removeItem("utoken");
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const { data } = await API.post("/users/admin-login", {
        email,
        password,
      });
      console.log("Login response", data);
      setCurrentUser({ email: data.email, name: data.name });
      setToken(data.token);
    } catch (error) {
      console.log("Login error", error);
      throw error;
    }
  };

  const logout = () => {
    console.log("Logging out");
    // Clear currentUser and token states
    setCurrentUser(null);
    setToken(null);
    // Remove user and token from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("utoken");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
