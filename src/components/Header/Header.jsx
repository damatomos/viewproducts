import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import './Header.css';

function Header() {

  const btnProdutos = React.useRef();
  const btnContato = React.useRef();

  function handleClick(event) {
    if (event.target.innerText === btnContato.current.innerText) {
      event.target.classList.add('active');
      btnProdutos.current.classList.remove('active');
    } else {
      event.target.classList.add('active');
      btnContato.current.classList.remove('active');
    }
  }

  return (
    <header className="Header">
      <Link to="/">
        <Button refe={btnProdutos} click={handleClick}>Produtos</Button>
      </Link>
      <Link to="/contact">
        <Button refe={btnContato} click={handleClick} style={{marginLeft: '1rem'}}>Contato</Button>
      </Link>
    </header>
  );
}

export default Header;