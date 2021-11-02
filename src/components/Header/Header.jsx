import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import './Header.css';

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <Button>Produtos</Button>
      </Link>
      <Link to="/contact">
        <Button style={{marginLeft: '1rem'}}>Contato</Button>
      </Link>
    </header>
  );
}

export default Header;