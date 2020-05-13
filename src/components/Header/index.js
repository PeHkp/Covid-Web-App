import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Header() {

  return (
    <div className="cabecario">
      <div className="left">
          <h1>Covid-19</h1>
      </div>
      <div className="headerigth">
        <Link className="headerlinks" to="/">
          Home
        </Link>
        <Link className="headerlinks" to="/sintomas">
          Sintomas
        </Link>
      </div>
    </div>
  );
}
