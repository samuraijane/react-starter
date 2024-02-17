import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <StrictMode>
    <App />
  </StrictMode>
);
