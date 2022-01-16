import React from "react";
import ShopItem from "./ShopItem";

export default function ListView(props) {
    const ShopItems = props.items.map((item, index) => <ShopItem key={index} item={item}></ShopItem>);

    return (
        <div className="shop-items">{ShopItems}</div>
    )
}