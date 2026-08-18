import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/route.jsx";
import { AuthContext } from "./context/AuthContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router} />

    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="dark"
    />
  </AuthContext>
);
