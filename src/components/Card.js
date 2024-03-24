import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const data = props.data;
  const category = props.category;

  var listItem = data.filter((a) => a.category == category);

  if (category == "starRate") {
    listItem = listItem.map((item) => {
      var emptyStars = 5 - item.stars;
      return (
        <>
          <div className="room">
            <Link href="/">
              <img className="img1" src={item.img} width="280px" height="300px" alt="" />
            </Link>
            <p className="text1">
              <b>{item.boldText}</b> {item.text}
            </p>
            <div className="stars">
              {[...Array(item.stars)].map((star) => {
                return (
                  <svg viewBox="0 -8 464 464" width="18" height="18">
                    <path
                      d="m232 371.472656 143.382812 76.527344-27.382812-162.089844 116-114.789062-160.3125-23.648438-71.6875-147.472656-71.6875 147.472656-160.3125 23.648438 116 114.789062-27.382812 162.089844zm0 0"
                      fill="#fea501"
                    />
                  </svg>
                );
              })}
              {[...Array(emptyStars)].map((star) => {
                return (
                  <svg viewBox="0 -8 464 464" width="18" height="18">
                    <path
                      d="m232 371.472656 143.382812 76.527344-27.382812-162.089844 116-114.789062-160.3125-23.648438-71.6875-147.472656-71.6875 147.472656-160.3125 23.648438 116 114.789062-27.382812 162.089844zm0 0"
                      fill="#333333"
                    />
                  </svg>
                );
              })}
            </div>
          </div>
        </>
      );
    });
  } else if (category == "thumbRate") {
    listItem = listItem.map((item) => {
      return (
        <>
          <div className="room">
            <Link href="/">
              <img className="img1" src={item.img} width="300px" height="300px" alt="" />
            </Link>
            <p className="text1">
              <b>{item.boldText}</b> {item.text}
            </p>
            <p className="otziv">
              <small>💬 Комментарии</small>{" "}
            </p>
            <p className="otziv">
              {" "}
              <small>
                👍 {item.likes} &nbsp; 👎 {item.dislikes}
              </small>
            </p>
          </div>
        </>
      );
    });
  } else if (category == "thumbRate-slim") {
    listItem = listItem.map((item) => {
      return (
        <>
          <div className="room">
            <Link href="/">
              <img className="img1" src={item.img} width="190px" height="235px" alt="" />
            </Link>
            <p className="text2">
              <b>{item.boldText}</b> {item.text}
            </p>
            <p className="otziv">
              <small>💬 Комментарии</small>{" "}
            </p>
            <p className="otziv">
              {" "}
              <small>
                👍 {item.likes} &nbsp; 👎 {item.dislikes}
              </small>
            </p>
          </div>
        </>
      );
    });
  } else if (category == "thumbRate-tall") {
    listItem = listItem.map((item) => {
      return (
        <>
          <div className="room">
            <Link href="/">
              <img className="img1" src={item.img} width="280px" height="310px" alt="" />
            </Link>
            <p className="text3">
              <b>{item.boldText}</b> {item.text}
            </p>
            <p className="otziv">
              <small>💬 Комментарии</small>{" "}
            </p>
            <p className="otziv">
              {" "}
              <small>
                👍 {item.likes} &nbsp; 👎 {item.dislikes}
              </small>
            </p>
          </div>
        </>
      );
    });
  } else if (category == "price") {
    listItem = listItem.map((item) => {
      return (
        <>
          <div className="room">
            <div className="card-img">
              <img className="img1" src={item.img} width="250px" height="280px" alt="" />
            </div>
            <p className="text4">
              <small>{item.text}</small>
            </p>
            <b>{item.discount}</b> <b className="b1">{item.price}</b>
            <p className="otziv">
              <small>{item.reviews}</small>{" "}
            </p>
          </div>
        </>
      );
    });
  } else if (category == "price-popular") {
    listItem = listItem.map((item) => {
      return (
        <>
          <div className="room">
            <div className="card-img">
              <img className="img1" src={item.img} width="250px" height="280px" alt="" />
            </div>
            <p className="text4">
              <small>{item.text}</small>
            </p>
            <b>{item.discount}</b> <b className="b1">{item.price}</b>
            <p className="otziv">
              <small>☆ Отзывы {item.reviews}</small>{" "}
            </p>
          </div>
        </>
      );
    });
  } else {
    listItem = listItem.map((item) => {
      return (
        <>
          <div className="room">
            <Link href="/">
              <img className="img1" src={item.img} width="280px" height="310px" alt="" />
            </Link>
            <p className="text3">
              <b className="b1">{item.text}</b>
            </p>
            <p className="otziv">
              <small>
                👍 {item.likes} &nbsp; Просмотры {item.views}
              </small>{" "}
            </p>
          </div>
        </>
      );
    });
  }
  return <div className="container">{listItem}</div>;
};

export default Card;
