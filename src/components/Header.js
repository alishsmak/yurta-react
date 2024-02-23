import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  /*ЛУПА*/
  function toggleSearchInput() {
    var searchInput = document.getElementById("searchInput");
    searchInput.style.display = searchInput.style.display === "none" || searchInput.style.display === "" ? "block" : "none";
    searchInput.focus();
  }

  return (
    // {/*Меню фиксированное*/}
    <div id="header">
      <div className="menu-first">
        <Link className="home-head" to="/">
          YurtaHome
        </Link>
        <a className="head" href="#soob">
          Сообщество
        </a>
        <a className="head" href="#pokupki">
          Покупки
        </a>
        <a className="head" href="#dizain">
          Дизайн
        </a>
        <Link className="head" to="/log">
          Войти в кабинет
        </Link>
        <a className="head-img" href="/">
          <img src="image/cartone.png" alt="" width="20px" />
        </a>
        {/* ЛУПА */}
        <div className="magnifier-container">
          <img src="image/loupe.png" alt="Magnifier" className="magnifier-icon" onClick={toggleSearchInput} />
          <input type="text" className="search-input" placeholder="Search..." id="searchInput" />
          <div className="btn">
            <Link to="/letter">
              <button className="btn1">Письмо</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
