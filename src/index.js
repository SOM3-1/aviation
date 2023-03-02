import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Login/loginPage";
import { Provider } from "react-redux";
import { sliceStore } from "./store/handlestore";
import { Display } from "./Display/display";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={sliceStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/User" element={<Display />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
