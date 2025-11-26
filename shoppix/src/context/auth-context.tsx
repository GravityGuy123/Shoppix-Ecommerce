"use client";

import React, { createContext, useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axios.config";
import { LoginSchema } from "@/app/auth/login/page";

interface User {
  id: number;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  login: (data: LoginSchema) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch CSRF cookie from backend
  const getCsrfCookie = async () => {
    await axiosInstance.get("/csrf/"); // backend endpoint that sets CSRF cookie
  };

  const checkAuth = async () => {
    try {
      await getCsrfCookie(); // ensure CSRF cookie exists
      const response = await axiosInstance.get("/auth/user"); // fetch logged-in user
      setUser(response.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => checkAuth(), 50); // small delay to ensure cookies exist
    return () => clearTimeout(timer);
  }, []);

  const login = async (data: LoginSchema) => {
    try {
      await getCsrfCookie(); // get CSRF token before login
      await axiosInstance.post("/auth/login", data); // backend sets JWT cookies
      await new Promise((resolve) => setTimeout(resolve, 50)); // ensure cookies are set
      await checkAuth();
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    try {
      await getCsrfCookie(); // fetch CSRF token before logout
      await axiosInstance.post("/auth/logout");
    } finally {
      setUser(null);
    }
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, loading, isLoggedIn, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}