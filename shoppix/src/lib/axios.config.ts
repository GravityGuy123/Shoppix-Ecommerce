import axios from "axios";

export const baseUrl = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // ✅ ensures cookies are sent
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically add CSRF token to unsafe requests
axiosInstance.interceptors.request.use((config) => {
  // Only attach CSRF token for POST, PUT, PATCH, DELETE
  const unsafeMethods = ["post", "put", "patch", "delete"];
  if (unsafeMethods.includes(config.method?.toLowerCase() || "")) {
    const csrfToken = getCookie("csrftoken"); // Django CSRF cookie
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }
  }
  return config;
});

// Helper to read a cookie by name
function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}