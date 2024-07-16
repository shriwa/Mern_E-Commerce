import React, { createContext, useState, useEffect } from "react";
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

  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  useEffect(() => {
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
      setCurrentUser({ email: data.email, name: data.name });
      setToken(data.token);
      setError(null);
    } catch (error) {
      console.error("Login error", error);
      setError(error.response ? error.response.data.error : "Login failed");
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("utoken");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
