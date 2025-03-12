import React from "react";
import MainSearchBar from "../../components/MainSearchBar";
import ChapterSearch from "../../components/ChaptersSearch";
import VIPannouncement from "../../components/VIPannouncement";
import Footer from "../../components/Footer";
import "./style.css";

const MainPage = ({ ads }) => {
    return (
        <div className="fragment">
            <MainSearchBar />
            <ChapterSearch />
            <VIPannouncement />

            <div className="main-page">
            <h2>Обычные объявления</h2>
            <div className="ads-list">
                {ads.length === 0 ? (
                    <p>Объявлений пока нет. Добавьте новое!</p>
                ) : (
                    ads.map((ad) => (
                        <div key={ad.id} className="ad-card">
                            {ad.image ? (
                                <img src={ad.image} alt={ad.title} />
                            ) : (
                                <div className="empty-image">Нет изображения</div>
                            )}
                            <div className="info">
                            <h3>{ad.title}</h3>
                            <p>Цена: {ad.price} KZT</p>
                            <p>Локация: {ad.location}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>

            <Footer />
        </div>
    );
};

export default MainPage;
