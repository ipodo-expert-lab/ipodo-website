import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/token.css";
import Nav from './components/Nav'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav/>
    <div style={{ height: '200vh', padding: '100px 5%' }}>
      Прокрутите страницу — навигация меняет фон
    </div>
  </StrictMode>,
);
