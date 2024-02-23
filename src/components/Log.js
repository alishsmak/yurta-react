import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Log.css";

function Log() {
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("socialLogin").classList.add("hidden");
      document.getElementById("profile").classList.remove("hidden");
      document.getElementById("userSpan").innerText = username;
    } else {
      alert("Incorrect username or password.");
    }
  }

  function loginWithGmail() {
    // Implement login with Gmail logic
    alert("Login with Gmail functionality coming soon!");
  }

  function loginWithWhatsApp() {
    // Implement login with WhatsApp logic
    alert("Login with WhatsApp functionality coming soon!");
  }

  function loginWithFacebook() {
    // Implement login with Facebook logic
    alert("Login with Facebook functionality coming soon!");
  }
  function loginWithNickname() {
    var nickname = document.getElementById("nickname").value;

    if (nickname) {
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("socialLogin").classList.add("hidden");
      document.getElementById("profile").classList.remove("hidden");
      document.getElementById("userSpan").innerText = nickname;
    } else {
      alert("Please enter a nickname.");
    }
  }

  function logout() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("socialLogin").classList.remove("hidden");
    document.getElementById("profile").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("nickname").value = "";
  }

  return (
    <>
      <div className="logo">
        <Link className="logo" to="/">
          {" "}
          <img src="../image/logo.jpg" alt="" width="60px" height="60px" />
          <h2>YurtaHome</h2>
        </Link>
      </div>
      <div className="big-container">
        <div id="socialLogin">
          <form id="loginForm">
            {/*  <label for="username">Имя пользователя</label>*/}
            <input className="enter" type="text" id="username" name="username" placeholder="электоронная почта" required="" />
            {/*  <label for="password">Пароль:</label>*/}
            <input className="enter" type="password" id="password" name="password" placeholder="пароль" required="" />
            <br />
            <button className="login" type="button" onClick={login}>
              Войти
            </button>
          </form>
        </div>
        <div className="combine">
          <div className="changepassword">
            <a className="liner" href="/">
              <p>Сбросить пароль</p>
            </a>
          </div>
          <div className="registration">
            <a className="liner" href="register.html">
              <p>Зарегистрироваться</p>
            </a>
          </div>
        </div>
        <div className="join">
          <p>Простой вход/регистрация членства с помощью учетной записи SNS </p>
        </div>
        <div className="whats">
          <div className="gmail" onClick={loginWithGmail}>
            <img src="image/gmail.png" alt="" width="50px" />
          </div>
          <div className="whatsap" onClick={loginWithWhatsApp}>
            <img src="image/whatsapp.png" alt="" width="50px" />
          </div>
          <div className="facebook" onClick={loginWithFacebook}>
            <img src="image/facebook.png" alt="" width="50px" />
          </div>
        </div>
        <div className="mistake">
          <a className="mistake" href="/">
            <p>У вас возникли проблемы со входом?</p>
          </a>
        </div>
      </div>
      <div className="line">
        <p>___________________________________</p>
      </div>
      <div className="rights">
        <p>ТОО ILA Group Все права защищены</p>
      </div>
      <div id="profile" className="hidden">
        <h2>
          Согласие
          <span id="userSpan" />!
        </h2>
        <button onClick={logout}>Выйти</button>
      </div>
    </>
  );
}

export default Log;
