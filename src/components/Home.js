import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Headroom from "react-headroom";
import "../styles/Home.css";
import Card from "./Card";

function Home() {
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

  const jsonData = [
    {
      category: "starRate",
      img: "image/chris.jpg",
      boldText: "Ёлка дома",
      text: "Посмотрите как приобразилась гостинная с ёлкой, смотрится очень гармонично",
      stars: 3,
    },
    {
      category: "starRate",
      img: "image/christma.jpg",
      boldText: "Зал ты прекрасен!",
      text: "Всё таки зелень украшает квартиру, уже чувствуешь себя как на природе",
      stars: 4,
    },
    {
      category: "starRate",
      img: "image/IMG_7849.jpg",
      boldText: "Зал в village стиле",
      text: "Дизайнерская идея для большого простаранства и больших окон",
      stars: 5,
    },
    {
      category: "starRate",
      img: "image/IMG_7853.jpg",
      boldText: "Угловые окна!",
      text: "Оформление для комнаты на крыше в стиле минимализма",
      stars: 2,
    },
    {
      category: "starRate",
      img: "image/IMG_7850.jpg",
      boldText: "Зал в стиле Гэтсби!",
      text: "Все в стиле 18 века по просьбе заказчика получился просто нереальным",
      stars: 3,
    },
    {
      category: "starRate",
      img: "image/IMG_7855.jpg",
      boldText: "Утро начинается с кофе!",
      text: "Милое и уютное простарнство для нашей кухни",
      stars: 2,
    },
    {
      category: "thumbRate",
      img: "image/reg-one.jpg",
      boldText: "Преображение спальной комнаты!",
      text: "Идея для дизайна спальни в белом цвете",
      likes: "86",
      dislikes: "4",
    },
    {
      category: "thumbRate",
      img: "image/reg-two.jpg",
      boldText: "Ручная работа такая редкость в наше время!",
      text: "Коридор теперь смотрится по новому",
      likes: "124",
      dislikes: "4",
    },
    {
      category: "thumbRate",
      img: "image/reg-three.jpg",
      boldText: "Наконец то купили новый диван",
      text: "Картины с ним очень гармонично смотрятся",
      likes: "564",
      dislikes: "22",
    },
    {
      category: "thumbRate",
      img: "image/reg-four.jpg",
      boldText: "Люблю белый цвет!",
      text: "Очень уютный дом кругом красота",
      likes: "78",
      dislikes: "2",
    },
    {
      category: "thumbRate",
      img: "image/reg-six.jpg",
      boldText: "Спальня моей принцессы!",
      text: "Наконец то оформили детскую комнату",
      likes: "254",
      dislikes: "10",
    },
    {
      category: "thumbRate",
      img: "image/reg-seven.jpg",
      boldText: "Моя уютная спальня",
      text: "Все сшила своими руками",
      likes: "36",
      dislikes: "4",
    },
    {
      category: "thumbRate-slim",
      img: "image/IMG_7706.jpg",
      boldText: "Гостиная для приема гостей",
      text: "Оцените наши новые лампы",
      likes: "1347",
      dislikes: "56",
    },
    {
      category: "thumbRate-slim",
      img: "image/IMG_7707.jpg",
      boldText: "Новая полка!",
      text: "Ничего лишнего не должно быть чтобы не засорять полки",
      likes: "896",
      dislikes: "31",
    },
    {
      category: "thumbRate-slim",
      img: "image/IMG_7709.jpg",
      boldText: "Чайный столик!",
      text: "Как красиво и эстетично смотрится наш новый столик в гостиной",
      likes: "736",
      dislikes: "21",
    },
    {
      category: "thumbRate-slim",
      img: "image/IMG_7710.jpg",
      boldText: "Зона для отдыха",
      text: "так давно мечтали о таком телевизоре",
      likes: "1144",
      dislikes: "47",
    },
    {
      category: "thumbRate-slim",
      img: "image/IMG_7711.jpg",
      boldText: "Пуфик ручной работы",
      text: "Посмотрите как гармонично смотрится ковер и новый пуфик",
      likes: "1074",
      dislikes: "52",
    },
    {
      category: "thumbRate-tall",
      img: "image/reg-eight.jpg",
      boldText: "Тропики в твоем доме!",
      text: "Очень освежает комнату вы только посмотрите сколько листьев",
      likes: "2476",
      dislikes: "61",
    },
    {
      category: "thumbRate-tall",
      img: "image/reg-nine.jpg",
      boldText: "Белый всегда в моде",
      text: "не смогла удержаться и купила опять белый декор",
      likes: "3895",
      dislikes: "97",
    },
    {
      category: "thumbRate-tall",
      img: "image/IMG_7676.jpg",
      boldText: "Модный дизайн гостиной!",
      text: "Как вам сочетание цветов все подбирал наш дизайнер",
      likes: "2761",
      dislikes: "74",
    },
    {
      category: "thumbRate-tall",
      img: "image/IMG_7712.jpg",
      boldText: "Дерево всегда актуально!",
      text: "Оцените как все сочетается и подходит по стилю",
      likes: "3975",
      dislikes: "107",
    },
    {
      category: "price",
      img: "image/IMG_7848.jpg",
      text: "Преобразите свой дом в оазис уюта и элегантности с нашим роскошным белым диваном. Этот изысканный предмет мебели не только станет фокусом вашего интерьера, но также добавит нотку свежести и стиля в вашу жилую зону.",
      discount: "34%",
      price: "299 000 тг",
      reviews: "45",
    },
    {
      category: "price",
      img: "image/reg-eleven.jpg",
      text: "Представляем вам уникальную возможность обогатить свой дом стильным и комфортабельным белым креслом. Это кресло не только привнесет свежесть в ваш интерьер, но и станет идеальным уголком для расслабленного отдыха после напряженного дня.",
      discount: "29%",
      price: "149 990 тг",
      reviews: "12",
    },
    {
      category: "price",
      img: "image/reg-twelve.jpg",
      text: "Компактное и стильное решение для вашей обеденной или гостиной зоны - небольшой круглый стол в комплекте с 4 элегантными стульями. Этот набор не только экономит пространство, но и добавляет уют и шарм вашему дому.",
      discount: "14%",
      price: "244 000 тг",
      reviews: "36",
    },
    {
      category: "price",
      img: "image/regthirteen.jpg",
      text: "Этот набор, включающий в себя стильный овальный стол и 4 ярких разноцветных стула, призван придать вашему интерьеру игривость и оригинальность. Создайте пространство, которое будет радовать глаз и приносить удовольствие в каждом моменте.",
      discount: "48%",
      price: "199 000 тг",
      reviews: "56",
    },
    {
      category: "price",
      img: "image/IMG_7837.jpg",
      text: "Погрузитесь в мир роскоши и стиля с нашим уникальным предложением – элегантным зеркалом и раковиной необычной формы. Этот комплект придаст вашей ванной комнате художественный шик и индивидуальность.",
      discount: "35%",
      price: "288 000 тг",
      reviews: "7",
    },
    {
      category: "price",
      img: "image/odeyalopokupki.jpeg",
      text: "Мягкий антибактериальный набор одеял Castella из кукурузного хлопка, межсезонный/всесезонный комплект одеяла",
      discount: "26%",
      price: "99 990 тг",
      reviews: "33",
    },
    {
      category: "price",
      img: "image/divan2pokupki.jpeg",
      text: "Великолепный белый кожаный диван - воплощение роскоши и стиля. Этот диван не только придаст вашему интерьеру изысканность, но и обеспечит максимальный уровень комфорта для ваших моментов отдыха.",
      discount: "17%",
      price: "499 990 тг",
      reviews: "25",
    },
    {
      category: "price",
      img: "image/divanpokupki.jpeg",
      text: "Уютное решение для вашего пространства - мягкий угловой диван в нежном бежевом оттенке. Этот диван не только создаст уют в вашем доме, но и станет стильным акцентом в вашем интерьере.",
      discount: "34%",
      price: "333 990 тг",
      reviews: "45",
    },
    {
      category: "price-popular",
      img: "image/reg-fourteen.jpg",
      text: "Эта картина станет великолепным дополнением к вашему интерьеру, создавая точку фокуса и принося неповторимое искусство в ваш дом. Позвольте себе наслаждаться красотой искусства каждый день.",
      discount: "23%",
      price: "34 990 тг",
      reviews: "15",
    },
    {
      category: "price-popular",
      img: "image/IMG_7714.jpg",
      text: "Погрузитесь в мир изысканности с нашей впечатляющей вазой необычной формы. Эта ваза не только станет великолепным элементом декора, но и придаст вашему интерьеру артистичность и художественную выразительность.",
      discount: "18%",
      price: "26 990 тг",
      reviews: "24",
    },
    {
      category: "price-popular",
      img: "image/IMG_7678.jpg",
      text: "идеальный комплект для вашей обеденной комнаты - круглый стол и 4 серых стула. Этот набор сочетает в себе функциональность, элегантность и современный стиль, создавая уютное пространство для семейных обедов и встреч с друзьями.",
      discount: "44%",
      price: "199 000 тг",
      reviews: "39",
    },
    {
      category: "price-popular",
      img: "image/IMG_7687.jpg",
      text: "Представляем вашему вниманию уникальный серый угловой диван, который станет неотъемлемым элементом современного интерьера. Этот диван сочетает в себе элегантный дизайн и высокий уровень комфорта, предоставляя вам и вашим гостям место для отдыха с изыском.",
      discount: "35%",
      price: "277 000 тг",
      reviews: "12",
    },
    {
      category: "thumbViews",
      img: "image/elka.jpg",
      text: "Создаем новогоднее настроение",
      likes: "524",
      views: "1762",
    },
    {
      category: "thumbViews",
      img: "image/IMG_8387.jpg",
      text: "Зона для отдыха нового формата",
      likes: "216",
      views: "988",
    },
    {
      category: "thumbViews",
      img: "image/IMG_8388.jpg",
      text: "Зеркало необычной формы как основная идея дизайна",
      likes: "42",
      views: "567",
    },
    {
      category: "thumbViews",
      img: "image/IMG_8389.jpg",
      text: "Идея дизайна с тумбочкой и креслом",
      likes: "142",
      views: "890",
    },
    {
      category: "thumbViews",
      img: "image/IMG_8386.jpg",
      text: "Принимаем гостей в удобной гостиной",
      likes: "613",
      views: "1392",
    },
    {
      category: "thumbViews",
      img: "image/IMG_8390.jpg",
      text: "Дeревянный аксессуары для кухни",
      likes: "71",
      views: "485",
    },
    {
      category: "thumbViews",
      img: "image/IMG_7842.jpg",
      text: "Тренд этого сезона кривые зеркала",
      likes: "245",
      views: "973",
    },
    {
      category: "thumbViews",
      img: "image/IMG_8392.jpg",
      text: "Атмосфера Нового года в большом зале",
      likes: "641",
      views: "1502",
    },
  ];

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
            <img
              className="nav-skidki"
              src="image/christmas-tree.png"
              alt="discount"
              width="30px"
            />
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
      <Card data={jsonData} category="starRate" />
      <br />
      {/*Плюсики*/}
      <div className="plus">
        <div className="plus-pictures">
          <img className="img1" src="image/IMG_7841.jpg" alt="" width="400px" />
          <div className="plus-sign" id="chair" onClick={() => toggleContent("content1", "chair")}>
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
          <img className="armchair" src="image/armchair.jpg" alt="" width="70px" />{" "}
          <img src="image/armchairtwo.jpg" alt="" width="50px" />{" "}
          <p>Кресло TEDDY, 1 шт., 64х62х71 см</p>
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
      </div>
      <div className="headline">
        <h4>Возможно вы искали именно это!</h4>
      </div>
      <div className="headline">
        <p>Мы рекомендуем контент по дизайну интерьера, который вам может понравиться</p>
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Card data={jsonData} category="thumbRate" />
      &nbsp; &nbsp; &nbsp;
      <br />
      &nbsp; &nbsp;
      <div className="headline">
        <h4>ЛУЧШЕЕ за неделю✨ Вы все это видели? 👇</h4>
      </div>
      <Card data={jsonData} category="thumbRate-slim" />
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
      <Card data={jsonData} category="thumbRate-tall" />
      <p className="header" id="pokupki">
        ПОКУПКИ
      </p>
      <br />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
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
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
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
      <Card data={jsonData} category="price" />
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
            <img
              className="nav"
              src="image/icons8-письменный-стол-100.png"
              alt="discount"
              width="40px"
            />
            Стол
          </a>{" "}
        </li>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
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
      <Card data={jsonData} category="price-popular" />
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
      <Card data={jsonData} category="thumbViews" />
      &nbsp; &nbsp;
      <Footer />
      &nbsp; &nbsp;
    </main>
  );
}

export default Home;
