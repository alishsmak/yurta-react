import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";
import ShopCard from "./ShopCard";
import { cardData } from "./ShopCardData";
import "../styles/Shop.css";
import Clock from "../AdvertClock/Clock";
import ClockApp from "../AdvertClock/ClockApp";

function Shop() {
  /*ПОИСК*/
  const searchInput = document.querySelector("#search");
  const divs = document.querySelectorAll(".room");

  searchInput?.addEventListener("keyup", function (event) {
    const word = event.target.value.toLowerCase();
    divs.forEach((item) => {
      item.querySelector("p").textContent.toLowerCase().includes(word)
        ? (item.style.display = "block")
        : (item.style.display = "none");
    });
  });

  /* Плюсики*/
  /* Plus signs */
  function toggleContent(contentId, position) {
    var content = document.getElementById(contentId);

    // Toggle the content display
    content.style.display =
      content.style.display === "none" || content.style.display === "" ? "block" : "none";

    if (content.style.display === "block") {
      // If content is displayed, hide other contents
      hideOtherContents(contentId);
    }

    // Set z-index to cover plus sign
    document.querySelectorAll(".plus-sign").forEach(function (plusSign) {
      plusSign.style.zIndex =
        plusSign.id === position && content.style.display === "block" ? "0" : "2";
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
    <>
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
      <div className="shop-content">
        {/* Верхний слайд */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
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
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
        <div className="menu-third">
          <li>
            <a href="/">
              <img className="nav-odealo" src="image/Pillow.png" alt="cart" width="40px" />
            </a>
            <a href="/">Одеяла</a>
          </li>
          <li>
            <a href="/">
              <img className="nav-light" src="image/bauble.png" alt="discount" width="40px" />
              Освещение
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav-buy" src="image/cart.png" alt="cart" width="30px" />
            </a>
            <a href="/">Купить</a>
          </li>
          <li>
            <a href="/">
              <img
                className="nav-skidki"
                src="image/christmas-tree.png"
                alt="discount"
                width="30px"
              />
              О,Скидки
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav-akcia" src="image/alarm.png" alt="discount" width="30px" />
              Акции
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/betterhome.png" alt="moving" width="30px" />
              Дизайн
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav-top" src="image/community.png" alt="com" width="30px" />
              Топ
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav-dostavka" src="image/delivery.png" alt="moving" width="30px" />
              Доставка
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="nav-tehnika"
                src="image/appliences.jpeg"
                alt="discount"
                width="40px"
              />
              Техника
            </a>
          </li>
        </div>
        <p className="header" id="soob">
          СООБЩЕСТВО
        </p>
        <ShopCard data={cardData} category="starRate" />
        {/*Плюсики*/}
        <div className="plus">
          <div className="plus-pictures">
            <img className="img1" src="image/IMG_7841.jpg" alt="" width="400px" />
            <div
              className="plus-sign"
              id="chair"
              onClick={() => toggleContent("content1", "chair")}
            >
              +
            </div>
            <div
              className="plus-sign"
              id="laptop"
              onClick={() => toggleContent("content2", "laptop")}
            >
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
          <div className="plus-pictures">
            <img className="img1" src="image/IMG_8391.JPG " alt="" width="400px" height="416px" />
            <div
              className="plus-sign"
              id="armchair"
              onClick={() => toggleContent("content5", "armchair")}
            >
              +
            </div>
            <div
              className="plus-sign"
              id="window"
              onClick={() => toggleContent("content6", "window")}
            >
              +
            </div>
            <div
              className="plus-sign"
              id="cubboard"
              onClick={() => toggleContent("content7", "cubboard")}
            >
              +
            </div>
            <div
              className="plus-sign"
              id="puffer"
              onClick={() => toggleContent("content8", "puffer")}
            >
              +
            </div>
            <p className="text1">
              <b>Какая милая собачка!</b> Оцените нашу идею дизайна спальни для дочери
            </p>
          </div>
          <div className="content" id="content5">
            <img className="armchair" src="image/armchair.jpg" alt="" width="70px" />
            <img src="image/armchairtwo.jpg" alt="" width="50px" />
            <p>Кресло TEDDY, 1 шт., 64х62х71 см</p>
            <p>
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
        </div>
        <div className="headline">
          <h4>Возможно вы искали именно это!</h4>
        </div>
        <div className="headline">
          <p>Мы рекомендуем контент по дизайну интерьера, который вам может понравиться</p>
        </div>
        <ShopCard data={cardData} category="thumbRate" />
        <div className="headline">
          <h4>ЛУЧШЕЕ за неделю✨ Вы все это видели? 👇</h4>
        </div>
        <ShopCard data={cardData} category="thumbRate-slim" />
        <div className="headline">
          <h5>Найдите по категориям </h5>
        </div>
        <div className="menu-third">
          <li>
            <a href="/">
              <img className="nav" src="image/gift.png" alt="cart" width="40px" />
            </a>
            <a href="/">Подарки</a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/christmas-wreath.png" alt="discount" width="40px" />
              Декорации
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/checklist.png" alt="cart" width="30px" />
            </a>
            <a href="/">Купить сертификат</a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/discount.png" alt="discount" width="30px" />
              О,Скидки
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/alarm.png" alt="discount" width="30px" />
              Акции
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/betterhome.png" alt="moving" width="30px" />
              Дизайн
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav-top" src="image/community.png" alt="com" width="30px" />
              Топ
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/delivery.png" alt="moving" width="30px" />
              Доставка
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/appliences.jpeg" alt="discount" width="40px" />
              Техника
            </a>
          </li>
        </div>
        <div className="headline">
          <h4>Самые популярные🔝😉 сообщества этой недели </h4>
        </div>

        {/*ПОИСК*/}
        <div className="input-field">
          <input id="search" type="text" placeholder="Search..." />
        </div>
        <div className="headline">
          <p>
            <h3>Успейте купить. Такая цена только сегодня</h3>
          </p>
        </div>

        {/*Clocks */}
        <ClockApp />

        <ShopCard data={cardData} category="price" />
        <div className="menu-third">
          <li>
            <a href="/">
              <img className="nav" src="image/icons8-кресло-100.png" alt="cart" width="40px" />
            </a>
            <a href="/">Кресло</a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/icons8-шкаф-100.png" alt="discount" width="40px" />
              Шкаф
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/icons8-стул-100.png" alt="discount" width="40px" />
              Стул
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/icons8-диван-100.png" alt="moving" width="40px" />
              Диван
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/icons8-спальня-100.png" alt="discount" width="40px" />
              Кровать
            </a>
          </li>
          <li>
            <a href="/">
              <img className="nav" src="image/icons8-imac-100.png" alt="discount" width="40px" />
              Техника
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="nav"
                src="image/icons8-письменный-стол-100.png"
                alt="discount"
                width="40px"
              />
              Стол
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="nav"
                src="image/icons8-домашний-декор-100.png"
                alt="moving"
                width="40px"
              />
              Декор
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="nav"
                src="image/icons8-новый-год-100.png"
                alt="discount"
                width="40px"
              />
              Новый год!
            </a>
          </li>
        </div>
        <div className="headline">
          <h4>Популярные товары этой недели</h4>
        </div>
        <ShopCard data={cardData} category="price-popular" />
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
        <ShopCard data={cardData} category="thumbViews" />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
