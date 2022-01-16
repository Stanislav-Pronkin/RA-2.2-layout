import React from "react";

export default function ShopCard({ card }) {
    return (
        <div className ="shop_card">
            <h3 className="card_title">{card.name}</h3>
            <div className="card_color">{card.color}</div>
            <div className="card_img">
                <img src={card.img} alt={card.name}/>
            </div>
            <div className="card_payment">
                <div className="card_price">${card.price}</div>
                <button className="card_button">Add to cart</button>
            </div>
        </div>
    )
}