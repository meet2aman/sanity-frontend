import React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/themeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
