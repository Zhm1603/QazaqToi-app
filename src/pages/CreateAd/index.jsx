import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const CreateAd = ({ addAd }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !price || !location) {
            alert("Заполните все поля!");
            return;
        }

        const newAd = {
            id: Date.now(),
            title,
            price,
            location,
            image: image ? URL.createObjectURL(image) : null
        };

        addAd(newAd);
        navigate("/"); 
    };

    return (
        <div className="create-ad-container">
            <h2>Создать Объявление</h2>
            <form onSubmit={handleSubmit}>
                <label>Название:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Цена:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

                <label>Локация:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

                <label>Изображение:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                <div className="button-group">
                    <button type="submit">Создать</button>
                    <button type="button" onClick={() => navigate("/")}>Отмена</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAd;
