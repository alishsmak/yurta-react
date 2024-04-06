import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";
import "../styles/Forum.css";
import RoomSwitcher from "./RoomSwitcher";
import { Link } from "react-router-dom";
import ImageWithBookmark from "./ImageWithBookmark";

function Forum() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <div className="forum-content">
        <div className="banner">
          <div className="banner1">
            <Link>
              <img src="image/cat.jpg" alt="" />
            </Link>
          </div>
          <div className="banner2">
            <Link>
              <img src="image/cat.jpg" alt="" />
            </Link>
          </div>
        </div>
        <div className="blog">
          <div className="blog-title">
            <h3>Ищете что-то похожее?</h3>
            <p>Возможно вам понравится что-то из этого</p>
          </div>
          <div className="blog-wrapper">
            <Link to="" className="blog-card">
              <ImageWithBookmark src="image/cat.jpg" />
            </Link>
            <Link className="blog-card">
              <ImageWithBookmark src="image/cat.jpg" />
            </Link>
            <Link className="blog-card">
              <ImageWithBookmark src="image/cat.jpg" />
            </Link>
            <Link className="blog-card">
              <ImageWithBookmark src="image/cat.jpg" />
            </Link>
          </div>
        </div>
        <RoomSwitcher />
      </div>
      <Footer />
    </>
  );
}

export default Forum;
