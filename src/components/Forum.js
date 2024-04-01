import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";
import "../styles/Forum.css";
import RoomSwitcher from "./RoomSwitcher";

function Forum() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <div className="forum-content">
        <RoomSwitcher />
      </div>
      <Footer />
    </>
  );
}

export default Forum;
