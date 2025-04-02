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
import Services from "./pages/services page/Services.tsx";
import LongDistanceMoving from "./pages/services page/LongDistanceMoving.tsx";
import StorageSolutions from "./pages/services page/StorageSolutions.tsx";
import CommercialMoving from "./pages/services page/CommercialMoving.tsx";
import ResidentialRelocation from "./pages/services page/ResidentialRelocation.tsx";
import LocalMoving from "./pages/services page/LocalMoving.tsx";
import ProfessionalPacking from "./pages/services page/ProfessionalPacking.tsx";

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
    path: "/service",
    element: <Services />,
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
  
  {
    path: "/service/professional-packing",
    element: <ProfessionalPacking />,
    errorElement: <Err />,
  },
  {
    path: "/service/local-moving",
    element: <LocalMoving />,
    errorElement: <Err />,
  },
  {
    path: "/service/residential-relocation",
    element: <ResidentialRelocation />,
    errorElement: <Err />,
  },
  {
    path: "/service/commercial-moving",
    element: <CommercialMoving />,
    errorElement: <Err />,
  },
  {
    path: "/service/storage-solutions",
    element: <StorageSolutions />,
    errorElement: <Err />,
  },
  {
    path: "/service/long-distance-moving",
    element: <LongDistanceMoving />,
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
