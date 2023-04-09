import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as BR } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BR>
      <App />
    </BR>
  </AuthProvider>
);
