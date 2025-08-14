import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProivder from "./context/api.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProivder>
      <App />
    </ContextProivder>
  </StrictMode>
);
