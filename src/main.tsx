import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from '@/App.tsx'
import Contact from "@/pages/contact page/Contact.tsx";
import Err from "./components/Err";
import AboutUs from "./pages/about us/AboutUs";
import Service from "./pages/service page/Service";

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
    path: "/services",
    element: <Service />,
    errorElement: <Err />,
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>,
)
