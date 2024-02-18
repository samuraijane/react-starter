import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ViewportProvider } from "./context/viewportContext";
import { App } from "./app";
import "./styles/style.scss";

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </StrictMode>
);
