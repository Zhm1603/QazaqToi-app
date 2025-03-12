import React from "react";
import "./style.css";
import tamada from "../../assets/tamada.png";
import hall from "../../assets/hall.png";
import artists from "../../assets/artists.png";
import camera from "../../assets/camera.png";
import accessories from "../../assets/accessories.png";


const categories = [
  { name: "Тамада", image: tamada },
  { name: "Банкетные Залы", image: hall },
  { name: "Артисты", image: artists },
  { name: "Операторы", image: camera },
  { name: "Аксессуары", image: accessories },
];

const ChapterSearch = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-title">Разделы на QazaqToi</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterSearch;
