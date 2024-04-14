import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../components/BlogData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Headroom from "react-headroom";
import "../styles/Blog.css";

function Blog() {
  const params = useParams();
  const blogID = "/blog/" + params.id;

  const data = blogData;
  const item = data.find((a) => a.id === blogID);
  // console.log(item.image);

  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <div className="blog-container">
        <div className="blog-wrapper">
          <div className="emtpy-space"></div>
          <div className="blog-content">
            <div className="img-main">
              {/* <img src={item.image} alt="" /> */}
              <img src='./cat.jpg' alt="" />
            </div>
          </div>
          <div className="blog-sidepanel">
            <div className="liked"></div>
            <div className="bookmarked"></div>
            <div className="commented"></div>
            <div className="shared"></div>
          </div>
        </div>
      </div>
      {/* <img src="image/cat.jpg" alt="" width="280px" height="300px"/> */}
      <Footer />
    </>
  );
}

export default Blog;
