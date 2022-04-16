import React from "react";
import Routess from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routess />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
