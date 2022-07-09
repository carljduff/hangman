import React from "react";
import '../css/card.css'

const GameCard = ({title, img}) => {
    return(
        <div className="game-main">
            <img src={img} className='img'></img>
            <h2 className="game-title">{title}</h2>
        </div>
    )
}

export default GameCard;