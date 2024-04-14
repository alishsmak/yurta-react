import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="onas">
      <div className="footer1">
        <div className="foot">
          <p>Центр обслуживания клиентов </p>
        </div>
        <p> tel: +7(705)000 00 00</p>
        <p>09:00 - 18:00</p>
        <ul>
          <li>Будни: Консультация по всем вопросам</li>
          <li>
            Суббота, праздничные дни: прямая доставка в YurtaHome, консультации по вопросам
            переезда/строительства/установки продукции.
          </li>
          <li> Воскресенье: закрыто</li>
        </ul>
      </div>
      <div className="footer2">
        <p>О нас</p>
        <p> Подать заявку на партнерство</p>
        <p>Вопросы о парнерстве/рекламе</p>
        <p>Рекламные пакеты</p>
        <p>Политика конфиденциальности</p>
        <p>Информация по набору персонала</p>
      </div>
    </div>
  );
}

export default Footer;
