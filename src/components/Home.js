import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Headroom from "react-headroom";
import "../styles/Home.css";

function Home() {
  /*ПОИСК*/
  const searchInput = document.querySelector("#search");
  const divs = document.querySelectorAll(".room");

  searchInput?.addEventListener("keyup", function (event) {
    const word = event.target.value.toLowerCase();
    divs.forEach((item) => {
      item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    });
  });

  /* Плюсики*/
  /* Plus signs */
  function toggleContent(contentId, position) {
    var content = document.getElementById(contentId);

    // Toggle the content display
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";

    if (content.style.display === "block") {
      // If content is displayed, hide other contents
      hideOtherContents(contentId);
    }

    // Set z-index to cover plus sign
    document.querySelectorAll(".plus-sign").forEach(function (plusSign) {
      plusSign.style.zIndex = plusSign.id === position && content.style.display === "block" ? "0" : "2";
    });
  }

  // Function to hide the content when clicking on the picture
  function hideContent(contentId, plusSignId) {
    var content = document.getElementById(contentId);

    // Hide the content
    content.style.display = "none";

    // Set z-index to show plus sign
    document.getElementById(plusSignId).style.zIndex = "2";
  }

  // Function to hide other contents when one is displayed
  function hideOtherContents(currentContentId) {
    document.querySelectorAll(".content").forEach(function (content) {
      if (content.id !== currentContentId && content.style.display === "block") {
        content.style.display = "none";
      }
    });
  }

  return (
    <main>
      <Headroom>
        <Header />
      </Headroom>
      <hr />
      <div className="menu-second">
        <Link className="menu-two" to="/">
          Квартира
        </Link>
        <Link className="menu-two" to="/">
          Дом
        </Link>
        <Link className="menu-two" to="/">
          Комната
        </Link>
        <Link className="menu-two" to="/">
          Дача
        </Link>
        <Link className="menu-two" to="/">
          Каналы
        </Link>
        <Link className="menu-two" to="/">
          События
        </Link>
        <Link className="menu-two" to="/">
          Предложения
        </Link>
        <Link className="menu-two" to="/">
          Топ
        </Link>
      </div>
      <hr />
      <br />
      {/* Верхний слайд */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/eighty.png" className="d-block w-100" alt="..." width="700px" />
          </div>
          <div className="carousel-item">
            <img src="image/sofa.png" className="d-block w-100" alt="..." width="700px" />
          </div>
          <div className="carousel-item">
            <img src="image/christmas.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="image/housemove.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      <br />
      &nbsp;
      <div className="menu-third">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-odealo" src="image/Pillow.png" alt="cart" width="40px" />
          </a>
          <a href="/">Одеяла</a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-light" src="image/bauble.png" alt="discount" width="40px" />
            Освещение
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-buy" src="image/cart.png" alt="cart" width="30px" />
          </a>
          <a href="/">Купить</a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-skidki" src="image/christmas-tree.png" alt="discount" width="30px" />
            О,Скидки
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-akcia" src="image/alarm.png" alt="discount" width="30px" />
            Акции
          </a>{" "}
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/betterhome.png" alt="moving" width="30px" />
            Дизайн
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-top" src="image/community.png" alt="com" width="30px" />
            Топ
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-dostavka" src="image/delivery.png" alt="moving" width="30px" />
            Доставка
          </a>
        </li>
        &nbsp;
        <li>
          {" "}
          <a href="/">
            <img className="nav-tehnika" src="image/appliences.jpeg" alt="discount" width="40px" />
            Техника
          </a>{" "}
        </li>
      </div>
      <br />
      <p className="header" id="soob">
        СООБЩЕСТВО
      </p>
      <div className="container">
        <div className="room">
          <img className="img1" src="image/chris.jpg" alt="" width="280px" height={300} />
          <p className="text1">
            <b>Ёлка дома</b> Посмотрите как приобразилась гостинная с ёлкой, смотрится очень гармонично{" "}
          </p>
          <p className="text1">
            {" "}
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </p>
        </div>
        <div className="room">
          <img className="img1" src="image/christma.jpg" width="280px" height="300px" alt="" />
          <p className="text1">
            <b>Зал ты прекрасен!</b> Всё таки зелень украшает квартиру, уже чувствуешь себя как на природе{" "}
          </p>
          <p className="text1">
            {" "}
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </p>
        </div>
        <div className="room">
          <img className="img1" src="image/IMG_7849.jpg" width="280px" height="300px" alt="" />
          <p className="text1">
            <b>Зал в village стиле</b> Дизайнерская идея для большого простаранства и больших окон
          </p>
          <p className="text1">
            {" "}
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked " />
            <span className="fa fa-star checked" />
          </p>
        </div>
        <div className="room">
          <img className="img1" src="image/IMG_7853.jpg" alt="" width="280px" height="300px" />
          <p className="text1">
            <b>Угловые окна!</b> Оформление для комнаты на крыше в стиле минимализма
          </p>
          <p className="text1">
            {" "}
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star " />
            <span className="fa fa-star " />
            <span className="fa fa-star " />
          </p>
        </div>
        <div className="room">
          <img className="img1" src="image/IMG_7850.jpg" alt="" width="280px" height="300px" />
          <p className="text1">
            <b>Зал в стиле Гэтсби!</b> Все в стиле 18 века по просьбе заказчика получился просто нереальным
          </p>
          <p className="text1">
            {" "}
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star " />
            <span className="fa fa-star" />
          </p>
        </div>
        <div className="room">
          <img className="img1" src="image/IMG_7855.jpg" alt="" width="280px" height="300px" />
          <p className="text1">
            <b>Утро начинается с кофе!</b> Милое и уютное простарнство для нашей кухни
          </p>
          <p className="text1">
            {" "}
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star " />
            <span className="fa fa-star" />
          </p>
        </div>
      </div>
      <br />
      {/*Плюсики*/}
      {/* <div className="plus">
        First set of pictures
        <div className="plus-pictures">
          <img className="img1" src="image/IMG_7841.jpg" alt="" width="400px" />
          <div className="plus-sign" id="chair" onClick={() => toggleContent("content1", "chair")}>
            +
          </div>
          <div className="plus-sign" id="laptop" onClick={() => toggleContent("content2", "laptop")}>
            +
          </div>
          <div className="plus-sign" id="pad" onClick={() => toggleContent("content3", "pad")}>
            +
          </div>
          <div className="plus-sign" id="lamp" onClick={() => toggleContent("content4", "lamp")}>
            +
          </div>
          <p className="text1">
            <b>Желтый,желтый,желтый</b> Оформление рабочей зоны в необычном и не скучном стиле
          </p>
        </div>
        Выход всех товаров после клика на них
        <div className="content" id="content1">
          <img src="image/chair.jpg" alt="" width="70px" />
          <img src="image/chair2.jpg" width="70px" alt="" />
          <div className="plusText">
            <h6>Стул Мягкий стул с белыми ножками</h6>
            <p>24 346 ₸</p>
          </div>
        </div>
        <div className="content" id="content2">
          <img src="image/monitor.jpg" alt="" width="70px" />
          <h6>Монитор Apple Studio Display MK0U3 серебристый</h6>
          <p>1 005 990 ₸</p>
        </div>
        <div className="content" id="content3">
          <img src="image/chairpillow.jpg" alt="" width="70px" />
          <h6>Подушка на стул Kauffort Лео 40х40 см</h6>
          <p>11 000₸</p>
        </div>
        <div className="content" id="content4">
          <img src="image/lampa.jpg" alt="" width="70px" />
          <h6>Лампа настольная 60W желтая на металлической подставке</h6>
          <p>3 877тг.</p>
        </div>
       Second set of pictures
        <div className="plus-pictures">
          <img className="img1" src="image/IMG_8391.JPG " alt="" width="400px" height="416px" />
          <div className="plus-sign" id="armchair" onClick={() => toggleContent("content5", "armchair")}>
            +
          </div>
          <div className="plus-sign" id="window" onClick={() => toggleContent("content6", "window")}>
            +
          </div>
          <div className="plus-sign" id="cubboard" onClick={() => toggleContent("content7", "cubboard")}>
            +
          </div>
          <div className="plus-sign" id="puffer" onClick={() => toggleContent("content8", "puffer")}>
            +
          </div>
          <p className="text1">
            <b>Какая милая собачка!</b> Оцените нашу идею дизайна спальни для дочери
          </p>
        </div>
        <div className="content" id="content5">
          <img className="armchair" src="image/armchair.jpg" alt="" width="70px" /> <img src="image/armchairtwo.jpg" alt="" width="50px" /> <p>Кресло TEDDY, 1 шт., 64х62х71 см</p>
          <p>
            {" "}
            <b>Стоимость:101 000тг</b>
          </p>
        </div>
        <div className="content" id="content6">
          <img className="mirror" src="image/mirror.jpg" alt="" width="50px" />
          <p>Зеркало </p>
          <p>интерьерное</p> <p>настенное</p> <p />
          <p>90 см х 50 см</p>
          <p>
            <b>Стоимость:17 613 ₸</b>
          </p>
        </div>
        <div className="content" id="content7">
          <img className="kamin" src="image/kamin.jpg" alt="" width="55px" />
          <p>Портал каминный</p> <p> RealFlame Marco 26 WT</p>
          <p>белый</p>
          <p>
            <b>Стоимость: 180 628 ₸</b>
          </p>
        </div>
        <div className="content" id="content8">
          <img className="puffik" src="image/puff.jpg" alt="" width="90px" />
          <p>Пуф</p> <p> Искусственный мех</p>
          <p> Букле, 67х46х46 см</p>
          <p>
            <b>Стоимость: 62 323 ₸</b>
          </p>
        </div>
      </div> */}
      <div className="headline">
        <h4>Возможно вы искали именно это!</h4>
      </div>
      <div className="headline">
        <p>Мы рекомендуем контент по дизайну интерьера, который вам может понравиться</p>
      </div>
      &nbsp; &nbsp; &nbsp;{" "}
      <div className="container">
        &nbsp;
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-one.jpg" alt="" width="300px" height="300px" />
          </a>
          <p className="text1">
            <b>Преображение спальной комнаты!</b> Идея для дизайна спальни в белом цвете{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 86 &nbsp; 👎 4</small>
          </p>
        </div>
        &nbsp;
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-two.jpg" width="300px" height="300px" alt="" />
          </a>
          <p className="text1">
            <b>Ручная работа такая редкость в наше время!</b> Коридор теперь смотрится по новому{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 124 &nbsp; 👎 8</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-three.jpg" alt="" width="300px" height="300px" />
          </a>
          <p className="text1">
            <b>Наконец то купили новый диван</b> Картины с ним очень гармонично смотрятся{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 564 &nbsp; 👎 22</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-four.jpg" alt="" width="300px" height="300px" />
          </a>
          <p className="text1">
            <b>Люблю белый цвет!</b> Очень уютный дом кругом красота{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 78 &nbsp; 👎 2</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-six.jpg" alt="" width="300px" height="300px" />
          </a>
          <p className="text1">
            <b>Спальня моей принцессы!</b> Наконец то оформили детскую комнату{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 254 &nbsp; 👎 10</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-seven.jpg" alt="" width="300px" height="300px" />
          </a>
          <p className="text1">
            <b>Моя уютная спальня</b> Все сшила своими руками
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 36 👎 4</small>
          </p>
        </div>
        &nbsp; &nbsp; &nbsp;
      </div>
      <br />
      &nbsp; &nbsp;
      <div className="headline">
        <h4>ЛУЧШЕЕ за неделю✨ Вы все это видели? 👇</h4>
      </div>
      <div className="container">
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7706.JPG" alt="" width="190px" height="" />
          </a>
          <p className="text2">
            <b>Гостиная для приема гостей</b> Оцените наши новые лампы{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 1347 &nbsp; 👎 56</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7707.JPG" width="190px" height={235} alt="" />
          </a>
          <p className="text2">
            <b>Новая полка!</b> Ничего лишнего не должно быть чтобы не засорять полки{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 896 &nbsp; 👎 31</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7709.JPG" alt="" width="190px" />
          </a>
          <p className="text2">
            <b>Чайный столик!</b> Как красиво и эстетично смотрится наш новый столик в гостиной{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 736 &nbsp; 👎 21</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7710.JPG" alt="" width="190px" />
          </a>
          <p className="text2">
            <b>Зона для отдыха</b> так давно мечтали о таком телевизоре
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 1144 &nbsp; 👎 47</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7711.JPG" alt="" width="200px" height="235px" />
          </a>
          <p className="text2">
            <b>Пуфик ручной работы</b> Посмотрите как гармонично смотрится ковер и новый пуфиг{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 1074 &nbsp; 👎 52</small>
          </p>
        </div>
      </div>
      <br />
      <div className="headline">
        <h5>Найдите по категориям </h5>
      </div>
      <div className="menu-third">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/gift.png" alt="cart" width="40px" />
          </a>
          <a href="/">Подарки</a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/christmas-wreath.png" alt="discount" width="40px" />
            Декорации
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/checklist.png" alt="cart" width="30px" />
          </a>
          <a href="/">Купить сертификат</a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/discount.png" alt="discount" width="30px" />
            О,Скидки
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/alarm.png" alt="discount" width="30px" />
            Акции
          </a>{" "}
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/betterhome.png" alt="moving" width="30px" />
            Дизайн
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav-top" src="image/community.png" alt="com" width="30px" />
            Топ
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/delivery.png" alt="moving" width="30px" />
            Доставка
          </a>
        </li>
        &nbsp;
        <li>
          {" "}
          <a href="/">
            <img className="nav" src="image/appliences.jpeg" alt="discount" width="40px" />
            Техника
          </a>{" "}
        </li>
      </div>
      <br />
      <div className="headline">
        <h4>Самые популярные🔝😉 сообщества этой недели </h4>
      </div>
      <div className="container">
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-eight.jpg" alt="" width="280px" height="310px" />
          </a>
          <p className="text3">
            <b>Тропики в твоем доме!</b> Очень освежает комнату вы только посмотрите сколько листьев{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 2476 &nbsp; 👎 61</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-nine.jpg" width="280px" height="310px" alt="" />
          </a>
          <p className="text3">
            <b>Белый всегда в моде</b> не смогла удержаться и купила опять белый декор
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 3895 &nbsp; 👎 97</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7676.JPG" alt="" width="290px" height="310px" />
          </a>
          <p className="text3">
            <b>Модный дизайн гостиной!</b> Как вам сочетание цветов все подбирал наш дизайнер{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 2761 &nbsp; 👎 74</small>
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7712.JPG" alt="" width="290px" height="310px" />
          </a>
          <p className="text3">
            <b>Дерево всегда актуально!</b> Оцените как все сочетается и подходит по стилю{" "}
          </p>
          <p className="otziv">
            <small>💬 Комментарии</small>{" "}
          </p>
          <p className="otziv">
            {" "}
            <small>👍 3975 &nbsp; 👎 107</small>
          </p>
        </div>
      </div>
      <p className="header" id="pokupki">
        ПОКУПКИ
      </p>
      <br />
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/eighty.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="image/christmas.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="image/sofa.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      {/*ПОИСК*/}
      <div className="input-field">
        <input id="search" type="text" placeholder="Search..." />
      </div>
      <div className="headline">
        <p>
          <small>Успейте купить. Такая цена только сегодня</small>
        </p>
      </div>
      <div className="container">
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7848.jpg" alt="" width="250px" height={280} />
          </a>
          <p className="text4">
            <small>Преобразите свой дом в оазис уюта и элегантности с нашим роскошным белым диваном. Этот изысканный предмет мебели не только станет фокусом вашего интерьера, но также добавит нотку свежести и стиля в вашу жилую зону.</small>
          </p>
          <b>34%</b> <b className="b1">299 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 45</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-eleven.jpg" width="245px" height="280px" alt="" />
          </a>
          <p className="text4">
            <small>Представляем вам уникальную возможность обогатить свой дом стильным и комфортабельным белым креслом. Это кресло не только привнесет свежесть в ваш интерьер, но и станет идеальным уголком для расслабленного отдыха после напряженного дня. </small>
          </p>
          <b>29%</b> <b className="b1">149 990 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 12</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-twelve.jpg" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>Компактное и стильное решение для вашей обеденной или гостиной зоны - небольшой круглый стол в комплекте с 4 элегантными стульями. Этот набор не только экономит пространство, но и добавляет уют и шарм вашему дому.</small>
          </p>
          <b>14%</b> <b className="b1">244 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 36</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/regthirteen.jpg" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>Этот набор, включающий в себя стильный овальный стол и 4 ярких разноцветных стула, призван придать вашему интерьеру игривость и оригинальность. Создайте пространство, которое будет радовать глаз и приносить удовольствие в каждом моменте.</small>
          </p>
          <b>48%</b> <b className="b1">199 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 56</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7837.jpg" alt="" width="250px" height={280} />
          </a>
          <p className="text4">
            <small>Погрузитесь в мир роскоши и стиля с нашим уникальным предложением – элегантным зеркалом и раковиной необычной формы. Этот комплект придаст вашей ванной комнате художественный шик и индивидуальность.</small>
          </p>
          <b>35%</b> <b className="b1">288 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 7</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/odeyalopokupki.jpeg" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>Мягкий антибактериальный набор одеял Castella из кукурузного хлопка, межсезонный/всесезонный комплект одеяла</small>
          </p>
          <b>26%</b> <b className="b1">99 990 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 33</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/divan2pokupki.jpeg" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>Великолепный белый кожаный диван - воплощение роскоши и стиля. Этот диван не только придаст вашему интерьеру изысканность, но и обеспечит максимальный уровень комфорта для ваших моментов отдыха.</small>
          </p>
          <b>17%</b> <b className="b1">499 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 25</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/divanpokupki.jpeg" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>Уютное решение для вашего пространства - мягкий угловой диван в нежном бежевом оттенке. Этот диван не только создаст уют в вашем доме, но и станет стильным акцентом в вашем интерьере.</small>
          </p>
          <b>34%</b> <b className="b1">333 990 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 45</small>{" "}
          </p>
        </div>
      </div>
      <div className="menu-third">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-кресло-100.png" alt="cart" width="40px" />
          </a>
          <a href="/">Кресло</a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-шкаф-100.png" alt="discount" width="40px" />
            Шкаф
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-стул-100.png" alt="discount" width="40px" />
            Стул
          </a>{" "}
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-диван-100.png" alt="moving" width="40px" />
            Диван
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-спальня-100.png" alt="discount" width="40px" />
            Кровать
          </a>{" "}
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-imac-100.png" alt="discount" width="40px" />
            Техника
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-письменный-стол-100.png" alt="discount" width="40px" />
            Стол
          </a>{" "}
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-домашний-декор-100.png" alt="moving" width="40px" />
            Декор
          </a>
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <li>
          <a href="/">
            <img className="nav" src="image/icons8-новый-год-100.png" alt="discount" width="40px" />
            Новый год!
          </a>{" "}
        </li>
        &nbsp;
      </div>
      <br />
      <div className="headline">
        <h4>Популярные товары этой недели</h4>
      </div>
      <div className="container">
        <div className="room">
          <a href="/">
            <img className="img1" src="image/reg-fourteen.jpg" alt="" width="250px" height={280} />
          </a>
          <p className="text4">
            <small>Эта картина станет великолепным дополнением к вашему интерьеру, создавая точку фокуса и принося неповторимое искусство в ваш дом. Позвольте себе наслаждаться красотой искусства каждый день.</small>
          </p>
          <b>23%</b> <b className="b1">34 990 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 15</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7714.JPG" width="245px" height="280px" alt="" />
          </a>
          <p className="text4">
            <small>Погрузитесь в мир изысканности с нашей впечатляющей вазой необычной формы. Эта ваза не только станет великолепным элементом декора, но и придаст вашему интерьеру артистичность и художественную выразительность. </small>
          </p>
          <b>18%</b> <b className="b1">26 990 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 24</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7678.JPG" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>идеальный комплект для вашей обеденной комнаты - круглый стол и 4 серых стула. Этот набор сочетает в себе функциональность, элегантность и современный стиль, создавая уютное пространство для семейных обедов и встреч с друзьями.</small>
          </p>
          <b>44%</b> <b className="b1">199 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы 39</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7687.JPG" alt="" width="250px" height="280px" />
          </a>
          <p className="text4">
            <small>Представляем вашему вниманию уникальный серый угловой диван, который станет неотъемлемым элементом современного интерьера. Этот диван сочетает в себе элегантный дизайн и высокий уровень комфорта, предоставляя вам и вашим гостям место для отдыха с изыском.</small>
          </p>
          <b>35%</b> <b className="b1">277 000 тг</b>
          <p className="otziv">
            <small>☆ Отзывы </small>{" "}
          </p>
        </div>
      </div>
      <p className="header" id="dizain">
        ДИЗАЙН
      </p>
      <div className="villa">
        <a className="dom" href="/">
          Тип дома
        </a>
        <a className="dom" href="/">
          Тип комнаты
        </a>
        <a className="dom" href="/">
          Количество комнат
        </a>
        <a className="dom" href="/">
          Стиль дизайна
        </a>
        <a className="dom" href="/">
          Особенности интерьера
        </a>
        <a className="dom" href="/">
          Новый год!
        </a>
      </div>
      {/*ПОИСК*/}
      <div className="input-field">
        <input id="search" type="text" placeholder="Search..." />
      </div>
      <div className="container">
        <div className="room">
          <a href="/">
            <img className="img1" src="image/elka.jpg" alt="" width="280px" height="310px" />
          </a>
          <p className="text3">
            <b className="b1">Создаем новогоднее настроение </b>
          </p>
          <p className="otziv">
            <small>👍 524 &nbsp; Просмотры 1762</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_8387.jpg" width="280px" height="310px" alt="" />
          </a>
          <p className="text3">
            <b className="b1">Зона для отдыха нового формата </b>
          </p>
          <p className="otziv">
            <small>👍 216 &nbsp; Просмотры 988</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_8388.JPG" alt="" width="290px" height="310px" />
          </a>
          <p className="text3">
            <b className="b1">Зеркало необычной формы как основная идея дизайна</b>
          </p>
          <p className="otziv">
            <small>👍 42 &nbsp; Просмотры 567</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_8389.JPG" alt="" width="290px" height="310px" />
          </a>
          <p className="text3">
            <b className="b1">Идея дизайна с тумбочкой и креслом </b>
          </p>
          <p className="otziv">
            <small>👍 142 &nbsp; Просмотры 890</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_8386.jpg" alt="" width="280px" height="310px" />
          </a>
          <p className="text3">
            <b className="b1">Принимаем гостей в удобной гостиной</b>
          </p>
          <p className="otziv">
            <small>👍 613 &nbsp; Просмотры 1392</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_8390.jpg" width="280px" height="310px" alt="" />
          </a>
          <p className="text3">
            <b className="b1">Днревянный аксессуары для кухни </b>
          </p>
          <p className="otziv">
            <small>👍 71 &nbsp; Просмотры 485</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_7842.jpg" alt="" width="290px" height="310px" />
          </a>
          <p className="text3">
            <b className="b1">Тренд этого сезона кривые зеркала </b>
          </p>
          <p className="otziv">
            <small>👍 245 &nbsp; Просмотры 973</small>{" "}
          </p>
        </div>
        <div className="room">
          <a href="/">
            <img className="img1" src="image/IMG_8392.JPG" alt="" width="290px" height="310px" />
          </a>
          <p className="text3">
            <b className="b1">Атмосфера Нового года в большом зале</b>
          </p>
          <p className="otziv">
            <small>👍 641 &nbsp; Просмотры 1502</small>{" "}
          </p>
        </div>
      </div>
      &nbsp; &nbsp;
      <Footer />
      &nbsp; &nbsp;
    </main>
  );
}

export default Home;
