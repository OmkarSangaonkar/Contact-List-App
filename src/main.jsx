import React from "react";
// import { createRoot } from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./redux/reducers/contactReducer";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // Add other reducers if you have more
  },
  // devTools: process.env.NODE_ENV !== 'production',
});

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
