import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/digimon.png";

import "./style.css";

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length)

  return (
    <div className="container">
      <Link to="home">
        <img className="logo" src={logo} />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </div>
  );
}
