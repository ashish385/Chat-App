import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Toaster} from 'react-hot-toast'
import { AuthContext } from "./auth/AuthContext";
// import { AuthContextProvider } from "./auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <Toaster />
      </React.StrictMode>
   
);
