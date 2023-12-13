// Navbar.js
import React, { useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {

  const isLoggedIn = document.cookie.split(";").some((x) => x.includes("_mxtheuz=true"));

  return (
    <div className="navbar">
      <a href="/">Início</a>
      {isLoggedIn ? (
        <a href="/painel">Painel do Administrador</a>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
};

export default Navbar;
