import homepage_image from "./homepage-image.png";
import "./home.css";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Home = () => {

    const history = useHistory();
    
    const gotoClick = () => {
        history.push("/shop");
    }

    return (
        <div className="home-container">

            <Fade left>
                <div className="home-container__text-content">
                    <h1 className="home-container__heading">Welcome to SneakShop</h1>
                    <p className="home-container__paragraph">Check for latest and quality productions</p>
                    <button className="button home-container__button" onClick={gotoClick}>Go to shopping</button>
                </div>
            </Fade>
            

            <div>
                <Fade right>  
                    <img className="home-container__main-image" src={homepage_image}/>
                </Fade>
            </div>
        </div>
    );
}
 
export default Home;