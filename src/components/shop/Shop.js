import sneak_data from "./sneak_data.json";
import like_icon from "../navbar/icons/like.png";
import cart_icon from "../navbar/icons/shopping-cart.png";
import like_icon_fill from "../navbar/icons/like-fill.png"
// import { useEffect, useState } from "react";
import "./shop.css";

const Shop = () => {

    // useEffect( () => {
    //     fetchItems();
    // }, []);

    // const [items, setItems] = useState([]);

    // const fetchItems = async() => {
    //     const data = await fetch({sneak_data});
    //     const items = await data.json();
    //     setItems(items);
    // }

    return (
        <div className="shop-container">
            <div className="shop-container__products">
                {sneak_data.map((map_element, index) => {
                    return(
                        <div className="card shop-card" key={map_element.id}>
                            <div className="shop-card__image-box">
                                <img className="shop-card__image" src={process.env.PUBLIC_URL + "/sneak-images/" + map_element.image} alt="can't find"/>
                            </div>

                            <div className="shop-card__title-box">
                                <p className="shop-card__title">{map_element.title}</p>
                            </div>

                            <div className="shop-card__price-box">
                                <p>{map_element.price + " $"}</p>
                                <div className="shop-card__icons-box">
                                    <img className="icon shop-card__like-icon" src={map_element.liked? like_icon_fill : like_icon}/>
                                    <img className="icon shop-card__cart-icon" src={cart_icon}/>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Shop;