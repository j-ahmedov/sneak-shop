import telegram_icon from "./icons/telegram.png";
import instagram_icon from "./icons/instagram.png";
import facebook_icon from "./icons/facebook.png";
import twitter_icon from "./icons/twitter.png";
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__first-part">
                <Link className="footer-text footer__home" to="/">Home</Link>
                <Link className="footer-text footer__shop" to="/shop">Shop</Link>
                <Link className="footer-text footer__categories" to="/categories">Categories</Link>
                <Link className="footer-text footer__business" to="/business">Business</Link>
            </div>

            <div className="footer__second-part">
                <p className="footer-text footer__phone">+998 94 416 10 99</p>
                <p className="footer-text footer__email">sneak-shop@gmail.com</p>
                <div className="footer__social-links-group">
                    <img className="footer__social-link footer__telegram" src={telegram_icon}/>
                    <img className="footer__social-link footer__instagram" src={instagram_icon}/>
                    <img className="footer__social-link footer__facebook" src={facebook_icon}/>
                    <img className="footer__social-link footer__twitter" src={twitter_icon}/>
                </div>

            </div>
        </footer>
    );
}

export default Footer;