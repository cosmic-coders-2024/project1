import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Tester account:
// tester1@hackathon2024.com
// `https://staff.brewcode2024.ekspawn.com / c7Qs6l9QFnvO`

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
