import FavouriteContext from "../store/ContextFavourite";
import { useContext } from "react";
import ProductList from "../components/product/ProductList";
function FavItems() {
    const favouriteContext = useContext(FavouriteContext);
    return <div>
        <ProductList productList={favouriteContext.favouriteItems}/>
    </div>
}

export default FavItems;