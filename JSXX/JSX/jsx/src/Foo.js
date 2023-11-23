import React from "react";

const Foo = ({ title,  image, description}) => {
    return (
        <div className="movie-card">
            <h2 className="movie-card__title">{title}</h2>
            <img src={image} alt={title} className="movie-card__image"/>
            <p className="movie-card__discription">{description}</p>
            <button className="subscribe">ПОДРОБНЕЕ</button>
        </div>
    )
};

export default Foo;
