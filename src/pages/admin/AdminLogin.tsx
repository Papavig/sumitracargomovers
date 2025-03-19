import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../AuthContext";
import { loginAdmin } from "../../services/api";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook for redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await loginAdmin({ username, password });
      login(token); // Save token in AuthContext
      navigate("/admin/dashboard"); // Redirect after login
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
