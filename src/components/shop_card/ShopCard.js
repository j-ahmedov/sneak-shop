import like_icon from "../navbar/icons/like.png";
import cart_icon from "../navbar/icons/shopping-cart.png";
import like_icon_fill from "../navbar/icons/like-fill.png"
import './shop_card.css'
import '../shop/Shop'


// function printHi(_id) {
//     console.log({_id});
// }

const ShopCard = (props) => {
    return (
        <div className="card shop-card" key={props.item.id}>
            <div className="shop-card__image-box">
                <img className="shop-card__image" src={process.env.PUBLIC_URL + "/sneak-images/" + props.item.image} alt="can't find"/>
            </div>

            <div className="shop-card__title-box">
                <p className="shop-card__title">{props.item.title}</p>
            </div>

            <div className="shop-card__price-box">
                <p>{props.item.price + " $"}</p>
                <div className="shop-card__icons-box">
                    <button onClick={event => props.handleLike(props.item.id)} className="shop-card__button">
                        <img className="icon" src={props.item.liked? like_icon_fill : like_icon}/>
                    </button>
                    <button className="shop-card__button">
                        <img className="icon" src={cart_icon}/>    
                    </button>
                    
                </div>
            </div>

        </div>
    );
}


export default ShopCard;