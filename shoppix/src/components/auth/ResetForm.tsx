"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import React from "react";

const shopHubColor = "bg-[#31C5D8]";
const shopHubTextColor = "text-[#31C5D8]";
const shopHubLightBg = "bg-[#E3F9FB]";

export default function ResetPage() {
  const [email, setEmail] = React.useState("you@example.com");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send reset link");

      setMessage("Reset link sent to your email.");
    } catch (err: unknown) {
      if (err instanceof Error) setMessage(err.message);
      else setMessage("An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 overflow-y-auto">
      <div className="w-full max-w-md p-6 md:p-12 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <AiOutlineShoppingCart className={`w-12 h-12 ${shopHubTextColor}`} />
          <h1 className={`text-2xl font-semibold mt-2 ${shopHubTextColor}`}>Welcome to ShopHub</h1>
          <p className="text-gray-500 text-sm mt-1 text-center">
            Sign in to your account or create a new one
          </p>
        </div>

        {/* Tabs */}
        <div className={`p-1 mb-6 rounded-md ${shopHubLightBg} flex justify-between`}>
          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-[#d0f0f5] hover:text-gray-700 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-[#d0f0f5] hover:text-gray-700 transition-colors"
          >
            Sign Up
          </Link>
          <span className={`px-4 py-2 text-sm font-medium text-white ${shopHubColor} rounded-md shadow-md`}>
            Reset
          </span>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleReset} className="flex flex-col space-y-4 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-md ${shopHubColor} hover:bg-[#2AAABF] focus:outline-none focus:ring-2 focus:ring-[#31C5D8] focus:ring-offset-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending Reset Link..." : "Send Reset Link"}
          </button>
        </form>

        {/* Terms */}
        <p className="text-center text-xs text-gray-400 mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className={`font-medium ${shopHubTextColor} hover:underline`}>Terms of Service</a> and{" "}
          <a href="#" className={`font-medium ${shopHubTextColor} hover:underline`}>Privacy Policy</a>
        </p>

        {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}