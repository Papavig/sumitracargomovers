import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { StrictMode, JSX } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import Contact from "./pages/contact page/Contact.tsx";
import Err from "./components/Err";
import AboutUs from "./pages/about us/AboutUs";
import Blogs from "./pages/blogs page/Blogs";
import BlogPost from "./pages/blogs page/BlogPost";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { AuthProvider, useAuth } from "./AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth(); // Check if admin is logged in

  if (!token) {
    return <Navigate to="/admin" replace />; // Redirect to login if not authenticated
  }

  return children;
};

// Define Routes
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Err />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Err />,
  },
  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <Err />,
  },
  {
    path: "/blog",
    element: <Blogs />,
    errorElement: <Err />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
    errorElement: <Err />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
    errorElement: <Err />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    errorElement: <Err />,
  },
]);

// Render Application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={BrowserRouter} />
    </AuthProvider>
  </StrictMode>
);
