import React from "react";
import { Link } from "react-router-dom";
import ImageWithBookmark from "./ImageWithBookmark";
import "../styles/Forum.css";

const BlogCard = (props) => {
  const data = props.data;
  const category = props.category;

  var listItem = data.filter((a) => a.category == category);

  if (category == "recommendation") {
    listItem = listItem.map((item) => {
      return (
        <Link to={item.id} className="blog-card">
          <ImageWithBookmark src={item.image} />
        </Link>
      );
    });
  } else {
    listItem = listItem.map((item) => {
      return <></>;
    });
  }
  return <div className="blog-wrapper">{listItem}</div>;
};

export default BlogCard;
