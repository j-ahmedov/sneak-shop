import search_icon from "./icons/loupe.png";
import like_icon from "./icons/like.png";
import cart_icon from "./icons/shopping-cart.png";
import './navbar.css';
import { Link } from 'react-router-dom';
import React from "react";

function Navbar({ showSignIn }) {

    const handleShowClick =() => {
        showSignIn();
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <p>SneakShop</p>
            </div>
            <div className="navbar__menu_common">
                <Link className="navbar__menu-item" to="/">Home</Link>
                <Link className="navbar__menu-item" to="/shop">Shop</Link>
                <Link className="navbar__menu-item" to="/categories">Categories</Link>
                <Link className="navbar__menu-item" to="/business">Business</Link>
            </div>
    
            <div className="navbar__icons">
                <img className="navbar__icon navbar__icon_search" src={search_icon}></img>
                <img className="navbar__icon navbar__icon_like" src={like_icon}></img>
                <img className="navbar__icon navbar__icon_cart" src={cart_icon}></img>
                <div>
                    <button className="button navbar__button" onClick={ handleShowClick }>Sign in</button>
                </div>
    
            </div>

        </nav>
    );

}
    

 
export default Navbar;