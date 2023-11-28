import React from "react";
import ReactDOM from "react-dom/client";
// App CMP
import App from "./App.jsx";
// Global Css
import "./global.css";
// UserContextProvider
import UserContextProvider from "./state/UserContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App userInfo="Admin" />
    </UserContextProvider>
  </React.StrictMode>
)