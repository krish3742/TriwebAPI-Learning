import CustomWrapper from "../layout/CustomWrapper";
import Style from './ProductItem.module.css';
import FavouriteContext from "../../store/ContextFavourite";
import { useContext } from "react";
function ProductItem(props) {
    const favouriteContext = useContext(FavouriteContext);
    const isFavorite = favouriteContext.isFavouriteItem(props.item._id);
    const toggleFavourite = () => {
        if(isFavorite) {
            favouriteContext.removeFavouriteItem(props.item._id)
        } else {
            favouriteContext.addFavouriteItem({...props.item});
        }
    }
    return <li key={props.item._id} className={Style.text}>
        <CustomWrapper>
            <div>
                <img src="https://drive.google.com/uc?id=1renuWX15PSa9vwOFRAL4H-WvvU2rPRFz" alt="No-image"></img>
            </div>
            <div>
                <h3>{props.item.pname}</h3>
                <p>{props.item.description}</p>
                <p>Rs {props.item.price}</p>
            </div>
            <div>
                <button>Purchase</button>
            </div>
            <div>
                <button className={isFavorite ? Style.favItem : Style.unfavItem} onClick={toggleFavourite}></button>
            </div>
        </CustomWrapper>
    </li>;
}

export default ProductItem;