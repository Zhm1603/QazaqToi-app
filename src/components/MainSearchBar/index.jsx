import React from "react";
import "./style.css";
import { Search, MapPin } from "lucide-react";

const MainSearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-input">
          <Search className="icon" />
          <input type="text" placeholder="Что ищете?" />
        </div>

        <div className="search-divider"></div>

        <div className="search-location">
          <MapPin className="icon" />
          <span>Вся страна</span>
        </div>

        <button className="search-button">
          Поиск <Search className="icon" />
        </button>
      </div>
    </div>
  );
};

export default MainSearchBar;
