import React from "react";
import "leaflet/dist/leaflet.css";

import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./pages/App";
import { AppProvider } from "./context";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { UserProvider } from "./userContext";
import End from "./pages/End";
import PrivateRoutes from "./PrivateRoutes";
import Start from "./pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "/rtsn", element: <App /> },
      { path: "/end", element: <End /> },
      { path: "*", element: <Navigate to='/' replace /> },
    ],
  },
  {
    path: "/end",
    element: <End />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AppProvider>
  </React.StrictMode>
);

// import React from "react";
// import "leaflet/dist/leaflet.css";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { AppProvider } from "./context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>
// );
