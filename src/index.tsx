import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ViewportProvider } from "./context/viewportContext";
import { App } from "./app";
import "./styles/style.scss";

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <StrictMode>
    <Provider store={store}>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </Provider>
  </StrictMode>
);
