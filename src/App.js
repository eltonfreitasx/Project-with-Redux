import React from "react";
import Routess from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routess />
      </BrowserRouter>
    </div>
  );
}
