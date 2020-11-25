import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="toggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul>
            <div className="ourSupaLogo">
              <img
                src="https://cdn.discordapp.com/attachments/768372391960117251/781113562998243378/logo.png"
                alt="le logo"
                width="150px"
                height="auto"
              />
            </div>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/game">Jeux</Link>
            </li>
            <li>
              <Link to="/about">Infos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
