import React from "react";
import { useState, useRef } from "react";
import { switcherData } from "./RoomSwitcherData";
import ImageWithBookmark from './ImageWithBookmark';

function RoomSwitcher() {
  const [catalog, setCatalog] = useState(switcherData);

  const chosenCatalog = (searchTerm) => {
    const newCatalog = switcherData.filter((element) => element.searchTerm === searchTerm);
    setCatalog(newCatalog);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    var newScrollPosition = scrollPosition + scrollAmount;
    if(newScrollPosition < 0) newScrollPosition = 0;
    else setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="room-switcher">
      <div className="room-switcher-catalog">
        <button onClick={() => setCatalog(switcherData)}>Все</button>
        <button onClick={() => chosenCatalog("гостинная")}>Гостинная</button>
        <button onClick={() => chosenCatalog("спальня")}>Спальня</button>
        <button onClick={() => chosenCatalog("кухня")}>Кухня</button>
        <button onClick={() => chosenCatalog("рабочая")}>Рабочая зона</button>
        <button onClick={() => chosenCatalog("балкон")}>Балкон</button>
      </div>
      <button className="button-left" onClick={() => handleScroll(-240)}>
        {"<"}
      </button>
      <button className="button-right" onClick={() => handleScroll(240)}>
        {">"}
      </button>
      <div className="room-switcher-wrapper" ref={containerRef}>
        {catalog.map((element) => {
          return (
            <div className="room-switcher-card" key={element.id}>
              <ImageWithBookmark key={element.id} src={element.image} />

              <div className="room-switcher-card-info">
                <h6>{element.name}</h6>
                {/* <p>{element.searchTerm}</p> */}
                <p>{element.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomSwitcher;
