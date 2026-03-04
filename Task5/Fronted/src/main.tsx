import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initI18 } from "./assets/i18n/index";

await initI18();

// Element root is guaranteed to exist
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);