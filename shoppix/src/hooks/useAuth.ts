// "use client";

// import { useEffect, useState } from "react";
// import { User, Session } from "@supabase/supabase-js";
// import { supabase } from "@/integrations/supabase/client";
// import { useToast } from "@/hooks/use-toast";

// export function useAuth() {
//   const [user, setUser] = useState<User | null>(null);
//   const [session, setSession] = useState<Session | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { toast } = useToast();

//   useEffect(() => {
//     // Listen to auth state changes
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setSession(session);
//         setUser(session?.user ?? null);
//         setLoading(false);
//       }
//     );

//     // Load session if exists
//     supabase.auth.getSession().then(({ data }) => {
//       setSession(data.session);
//       setUser(data.session?.user ?? null);
//       setLoading(false);
//     });

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);

//   const signUp = async (
//     email: string,
//     password: string,
//     firstName: string,
//     lastName: string
//   ) => {
//     try {
//       const redirectUrl = `${window.location.origin}/`;

//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           emailRedirectTo: redirectUrl,
//           data: {
//             first_name: firstName,
//             last_name: lastName,
//           },
//         },
//       });

//       if (error) throw error;

//       toast({
//         title: "Account created!",
//         description: "Welcome to Shoppix. Check your email for verification.",
//       });

//       return { data, error: null };
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Signup failed",
//         description: err.message,
//       });
//       return { data: null, error: err };
//     }
//   };

//   const signIn = async (email: string, password: string) => {
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) throw error;

//       toast({
//         title: "Welcome back!",
//         description: "You’ve successfully signed in.",
//       });

//       return { data, error: null };
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Login failed",
//         description: err.message,
//       });
//       return { data: null, error: err };
//     }
//   };

//   const signOut = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;

//       toast({
//         title: "Signed out",
//         description: "You’ve been successfully signed out.",
//       });
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Sign out failed",
//         description: err.message,
//       });
//     }
//   };

//   return {
//     user,
//     session,
//     loading,
//     signUp,
//     signIn,
//     signOut,
//   };
// }
