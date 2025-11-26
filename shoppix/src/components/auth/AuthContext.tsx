// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// interface AuthContextType {
//   loggedIn: boolean;
//   login: () => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

// //   useEffect(() => {
// //     const auth = localStorage.getItem("isLoggedIn");
// //     setLoggedIn(auth === "true");
// //   }, []);

//   useEffect(() => {
//   const auth = localStorage.getItem("isLoggedIn") === "true";
//   const timer = setTimeout(() => setLoggedIn(auth), 0);
//   return () => clearTimeout(timer);
//   }, []);


//   const login = () => {
//     localStorage.setItem("isLoggedIn", "true");
//     setLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("access");
//     localStorage.removeItem("refresh");
//     setLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ loggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };