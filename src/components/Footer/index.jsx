import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="logo" />
        <h1 className="footer-logo">QazaqToi</h1>
        <p className="footer-text">
          Начинающий онлайн-сервис объявлений Казахстана.
          <br />
          Все онлайн-объявления нужных вам на той людей Казахстана здесь!
          <br />
          Нажав на кнопку "Подать объявление", вы сможете разместить объявление на любую тематику легко и быстро.
          <br />
          С помощью сервиса QazaqToi вы сможете нанять кого-угодно и найти все что нужно для проведения праздника.
        </p>
        <p className="footer-social-text">Сообщества QazaqToi в социальных сетях:</p>
        <div className="footer-icons">
          <FaFacebook className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaYoutube className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
