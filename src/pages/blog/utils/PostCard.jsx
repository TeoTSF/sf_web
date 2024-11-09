// utils/PostCard.js
import React from 'react';

const PostCard = ({ titulo, autor, fecha, categoria, imagen, resumen, enlace }) => {
    return (
        <div className="post_card">
            <img src={imagen} alt={titulo} className="post_card_image" />
            <div className="post_card_content">
                <h3 className="post_card_title">{titulo}</h3>
                <p className="post_card_category">{categoria}</p>
                <p className="post_card_author">Por {autor}</p>
                <p className="post_card_date">{fecha}</p>
                <p className="post_card_summary">{resumen}</p>
                <a href={enlace} className="post_card_link" target="_blank" rel="noopener noreferrer">
                    Leer más
                </a>
            </div>
        </div>
    );
};

export default PostCard;
