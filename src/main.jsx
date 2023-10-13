import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapper from "./context/ContextWrapper.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextWrapper>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ContextWrapper>
);
