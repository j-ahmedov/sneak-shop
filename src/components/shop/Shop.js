import sneak_data from "./sneak_data.json";
import { useEffect, useState } from "react";
import "./shop.css";
import "../shop_card/ShopCard"
import ShopCard from "../shop_card/ShopCard";


const Shop = () => {

    const [_data, setData] = useState([]);

    const getData = () => {
        fetch('./sneak_data.json',
        {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        }
        )
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            setData(myJson);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleLike = (_id) => {
        let new_data = sneak_data.map((map_element, index) => {
            if (_id === map_element.id) {
                map_element.liked = !map_element.liked;
            }
        });

        setData(new_data);
        // console.log(_id);
    }

    return (
        <div className="shop-container">
            <div className="shop-container__products">
                {sneak_data.map((map_element, index) => {
                    return(
                        <ShopCard handleLike={handleLike} item={map_element}/>
                    )
                })}
                
            </div>
        </div>
    );
}
 
export default Shop;