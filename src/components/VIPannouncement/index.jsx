import React from "react";
import "./style.css";
import person from "../../assets/person.png";
import restaran from "../../assets/restaran.png";
import dancer from "../../assets/dancer.png";
import cameramen from "../../assets/cameramen.jpg";
import kalta from "../../assets/kalta.png";

const categories = [
  { name: "Тамада", image: person, price: "от 50 000 тг.", location: "Алматы", user: "Азамат К." },
  { name: "Банкетные Залы", image: restaran, price: "от 500 000 тг.", location: "Астана", user: "Гульмира Т." },
  { name: "Артисты", image: dancer, price: "от 70 000 тг.", location: "Шымкент", user: "Ержан Н." },
  { name: "Операторы", image: cameramen, price: "от 30 000 тг.", location: "Караганда", user: "Алия С." },
  { name: "Аксессуары", image: kalta, price: "от 5 000 тг.", location: "Павлодар", user: "Мадина Р." },
];

const VIPannouncement = () => {
  return (
    <div className="vip-container">
      <h2 className="vip-title">VIP-объявления</h2>
      <div className="vip-grid">
        {categories.map((category, index) => (
          <div key={index} className="vip-card">
            <img src={category.image} alt={category.name} className="vip-image" />
            <div className="vip-info">
              <h3 className="vip-name">{category.name}</h3>
              <p className="vip-price">{category.price}</p>
              <p className="vip-location">{category.location}</p>
              <p className="vip-user">📌 {category.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIPannouncement;
