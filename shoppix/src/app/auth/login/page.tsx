"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Spinner } from "@/components/ui/spinner";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data); // sets cookies and updates user state
      toast.success("Login successful", { position: "top-right" });
      router.push("/");
    } catch {
      toast.error("Login failed", { position: "top-center" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              disabled={isSubmitting}
              {...register("email")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-indigo-400 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                disabled={isSubmitting}
                {...register("password")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50 text-gray-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition flex justify-center items-center"
          >
            {isSubmitting ? <Spinner /> : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-cyan-500 hover:underline font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          {`Don’t have an account?`}{" "}
          <Link
            href="/auth/register"
            className="text-cyan-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}