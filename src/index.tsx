import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <StrictMode>
    <h1>Hello React</h1>
  </StrictMode>
);
