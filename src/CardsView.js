import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView(props) {
    const ShopCards = props.cards.map((item, index) => <ShopCard key={index} card={item}></ShopCard>)

    return (
        <div className="shop-cards">{ShopCards}</div>
    )
}