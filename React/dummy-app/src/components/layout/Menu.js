import { Link } from "react-router-dom";
import MenuStyle from './Menu.module.css';
import FavouriteContext from "../../store/ContextFavourite";
import { useContext } from "react";
function Menu() {
    const favouriteContext = useContext(FavouriteContext);
    const favItemCount = favouriteContext.favouriteItems.length;
    return <nav className={MenuStyle.nav}>
        <ul className={MenuStyle.ul}>
            <li><Link to="/" className={MenuStyle.link}>Home</Link></li>
            <li><Link to="/about" className={MenuStyle.link}>About</Link></li>
            <li><Link to="/contact" className={MenuStyle.link}>Contact</Link></li>
            <li><Link to="/owner" className={MenuStyle.link}>Owner</Link></li>
            <li><Link to="/product" className={MenuStyle.link}>Product</Link></li>
            <li><Link to="/product/add" className={MenuStyle.link}>Add Product</Link></li>
            <li className={MenuStyle.favCount}><Link to="/product/favourite" className={MenuStyle.link}>{favItemCount}</Link></li>
        </ul>
    </nav>
}

export default Menu;