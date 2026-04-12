import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
  // BrowserRouter의 역할
  // 브라우저의 주소를 리액트 앱이 감지할 수 있도록 하여
  // ui와 동기화 시켜주는 역할
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
