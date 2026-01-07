import React from "react";
import ReactDOM from "react-dom/client";import App from "./App";
import { initI18 } from "./assets/i18n";

const root = ReactDOM.createRoot(document.getElementById("root")!);
await initI18()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
