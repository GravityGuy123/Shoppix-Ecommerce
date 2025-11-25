"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.currentTarget;
    const password1 = (form["password1"] as HTMLInputElement).value.trim();
    const password2 = (form["password2"] as HTMLInputElement).value.trim();

    // === Validation ===
    if (!password1 || !password2) {
      setError("Both fields are required.");
      return;
    }

    if (password1 !== password2) {
      setError("Passwords do not match.");
      return;
    }

    if (password1.length < 8 || password1.length > 30) {
      setError("Password must be between 8 and 30 characters.");
      return;
    }

    const hasUpper = password1.split("").some((c) => c === c.toUpperCase() && /[A-Z]/.test(c));
    const hasDigit = password1.split("").some((c) => !isNaN(Number(c)));
    const hasSymbol = password1.split("").some((c) => "!@#$%^&*()_+-=[]{};:'\",.<>?/|`~".includes(c));

    if (!hasUpper || !hasDigit || !hasSymbol) {
      setError("Password must contain an uppercase letter, a number, and a special character.");
      return;
    }

    setSuccess("Password reset successful! Redirecting to login...");

    setTimeout(() => {
      router.push("/auth/login");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Reset Password
        </h2>

        <p className="text-sm text-center mb-6 text-gray-600 dark:text-gray-400">
          Enter a new password for your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password1"
                name="password1"
                placeholder="Enter new password"
                required
                minLength={8}
                maxLength={30}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-cyan-500
                  bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-cyan-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                id="password2"
                name="password2"
                placeholder="Re-enter your password"
                required
                minLength={8}
                maxLength={30}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-cyan-500 
                  bg-gray-50 dark:bg-gray-900 text-gray-800 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-cyan-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error / Success */}
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          {success && (
            <p className="text-sm text-cyan-500 dark:text-indigo-400 mt-1">
              {success}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-medium bg-cyan-500 hover:bg-cyan-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}