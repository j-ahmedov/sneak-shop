import data from "./categories.json";
import "./categories.css";

const Categories = () => {

    return (
        <div className="category-container">
            {data.map((map_element, index) => {
                return (
                    <div className="card category-card">
                        <div className="category-card__category-image-box">
                            <img className="category-card__category-image" src={process.env.PUBLIC_URL + "/images/" + map_element.image + "-sneak.jpg"} alt="can't find"/>
                        </div>

                        <div className="category-card__category-title-box">
                            <p className="category-card__category-title">{map_element.title}</p>
                        </div>
                        
                    </div>
                    )
            })}
        </div>
    );
}
 
export default Categories;