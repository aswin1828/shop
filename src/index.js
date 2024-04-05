import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopcontextProvider from "./context/Shopcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopcontextProvider>
      <App />
    </ShopcontextProvider>
  </React.StrictMode>
);
