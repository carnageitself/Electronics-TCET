import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapper from "./context/ContextWrapper.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
  <ContextWrapper>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ContextWrapper>
  </DarkModeContextProvider>
);
