import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import heart from "../../assets/heart.png";
import notification from "../../assets/notification.png";
import user from "../../assets/user.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // Используем для перехода на страницу

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo-img">
                <img src={logo} alt="logo" />
            </div>
            <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <img src={heart} alt="Избранные" /> Избранные
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={notification} alt="Уведомления" /> Уведомления
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={user} alt="Ваш профиль" /> Профиль
                        </a>
                    </li>
                </ul>
                <button className="create-announcement" onClick={() => navigate("/create")}>
                    Создать Объявление
                </button>
            </nav>

            <div className={`burger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
