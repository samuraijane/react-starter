import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store';
import { ViewportProvider } from "./context/viewport-context";
import { App } from "./app";
import { ScrollToTop } from "./utils/scroll-to-top";
import "./styles/style.scss";

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ViewportProvider>
          <ScrollToTop />
          <App />
        </ViewportProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
