import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/digimon.png";

import "./style.css"

export default function Header() {
  return (
    <div className="container">
      <Link to="home">
        <img className="logo" src={logo} />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </div>
  );
}
