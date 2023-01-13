import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import { UserProvider } from "./context/userContext";
import { CategoriesProvider } from "./context/categoriesContext";
import { CartProvider } from "./context/cartContext";
import { WindowSizeProvider } from "./context/windowSizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <React.StrictMode>
        <CategoriesProvider>
          <CartProvider>
            <WindowSizeProvider>
              <App />
            </WindowSizeProvider>
          </CartProvider>
        </CategoriesProvider>
      </React.StrictMode>
    </UserProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
