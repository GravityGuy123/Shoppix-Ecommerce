"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const form = e.currentTarget;
    const email = (form["email"] as HTMLInputElement).value.trim();

    if (!email) return setErrorMessage("Please enter your email address.");

    if (!email.includes("@") || !email.includes(".")) {
      return setErrorMessage("Please enter a valid email address.");
    }

    // Normally, you would call backend API here
    setSuccessMessage("Password reset link has been sent to your email.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Forgot Password
        </h2>

        <p className="text-sm text-center mb-6 text-gray-600 dark:text-gray-400">
          Enter your email and we will send you a password reset link.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-500 
              bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          {/* Success Message */}
          {successMessage && (
            <p className="text-violet-600 dark:text-indigo-400 text-sm">
              {successMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Remembered your password?{" "}
          <Link
            href="/auth/login"
            className="text-cyan-500 font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}