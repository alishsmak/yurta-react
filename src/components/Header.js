import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import "../styles/Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [toggle, setToggle] = useState(false);
  const handleToggle = async (event) => {
    setToggle(!toggle);
    await delay(400);
    ref.current.focus();
  };
  const closeSearch = () => setToggle(false);

  const ref = useRef(null);

  return (
    // {/*Меню фиксированное*/}
    <header onClick={closeSearch}>
      <nav>
        <Link to="/" className="navbar-logo">
          YurtaHome
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
              />
            </svg>
          ) : (
            <svg width="1em" height="1em" viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M104 228a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0"
              ></path>
            </svg>
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div id="menu-blur" className="blur" onClick={closeMobileMenu}></div>
          <li className="nav-item">
            <NavLink to="/forum" className="nav-link" onClick={closeMobileMenu}>
              Сообщество
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>
              Покупки
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/design" className="nav-link" onClick={closeMobileMenu}>
              Дизайн
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/log" className="nav-link" onClick={closeMobileMenu}>
              Войти в кабинет
            </Link>
          </li>
        </ul>
        <div className="navbar-buttons">
          {/* ЛУПА  */}
          <div className="search" onClick={(e) => e.stopPropagation()}>
            <div className="magnifier" onClick={handleToggle}>
              <svg width="1em" height="1em" fill="#242424" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527"
                />
              </svg>
            </div>
            <label className={toggle ? "search-input active" : "search-input"}>
              <div id="search-blur" className="blur" onClick={closeSearch}></div>
              <input type="text" ref={ref} placeholder="Search..." />
            </label>
          </div>
          <div className="cart">
            <Link to="/">
              <svg width="16" height="16" fill="#242424" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </Link>
          </div>
        </div>
        <div className={click ? "letter active" : "letter"}>
          <Link to="/letter">
            <button className="letter-btn">Письмо</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
