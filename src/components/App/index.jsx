import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import MainPage from "../../pages/MainPage";
import CreateAd from "../../pages/CreateAd";
import "./style.css";

const App = () => {
    const [ads, setAds] = useState([]);

    // Загружаем объявления из localStorage при запуске
    useEffect(() => {
        const savedAds = JSON.parse(localStorage.getItem("ads")) || [];
        setAds(savedAds);
    }, []);

    // Функция для добавления нового объявления
    const addAd = (newAd) => {
        const updatedAds = [...ads, newAd];
        setAds(updatedAds);
        localStorage.setItem("ads", JSON.stringify(updatedAds)); // Сохраняем в localStorage
    };

    return (
        <Router>
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<MainPage ads={ads} />} />
                    <Route path="/create" element={<CreateAd addAd={addAd} />} />
                </Routes>
            </DefaultLayout>
        </Router>
    );
};

export default App;
