import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Headroom from "react-headroom";
import "../styles/Forum.css";
import RoomSwitcher from "../components/RoomSwitcher";
import { Link } from "react-router-dom";
import ImageWithBookmark from "../components/ImageWithBookmark";
import Blog from "./Blog";
import { blogData } from "../components/BlogData";
import BlogCard from "../components/BlogCard";

function Forum() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <div className="forum-container">
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
          <BlogCard data={blogData} category="recommendation" />
        </div>
        <RoomSwitcher />
      </div>
      <Footer />
    </>
  );
}

export default Forum;
