import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import API from "../API/index";

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
    const token = localStorage.getItem("auth_token");
    return token || null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
  }, [token]);

  // Login
  const login = async (email, password) => {
    try {
      const { data } = await API.post("/users/login", { email, password });
      setCurrentUser({ email: data.email, name: data.name });
      setToken(data.token);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Login failed";
      if (error.response?.status === 401) {
        throw new Error(errorMessage);
      } else {
        throw new Error(errorMessage);
      }
    }
  };

  // Signup
  const signup = async (name, email, password) => {
    if (!name || !email || !password) {
      console.log("One of the input field is empty");
    }
    try {
      const { data } = await API.post("/users/signup", {
        name,
        email,
        password,
      });
      setCurrentUser({ email: data.email, name: data.name });
      setToken(data.token);
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Login failed";
      if (error.response?.status === 401) {
        throw new Error(errorMessage);
      } else {
        throw new Error(errorMessage);
      }
    }
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("auth_token");
  };

  const checkTokenExpiration = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          logout();
          alert("Session expired. Please log in again.");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
    const interval = setInterval(checkTokenExpiration, 3600000);
    return () => clearInterval(interval);
  }, [token]);

  return (
    <AuthContext.Provider value={{ currentUser, token, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
