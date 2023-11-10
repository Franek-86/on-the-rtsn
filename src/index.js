import React from "react";
import "leaflet/dist/leaflet.css";

import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import { AppProvider } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./Start";
import Login from "./Login";
import { UserProvider } from "./userContext";

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
    path: "rtsn",
    element: <App />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </UserProvider>
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
