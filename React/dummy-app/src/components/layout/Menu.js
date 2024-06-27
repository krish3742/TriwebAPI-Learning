import { Link } from "react-router-dom";
import MenuStyle from './Menu.module.css';
function Menu() {
    return <nav className={MenuStyle.nav}>
        <ul className={MenuStyle.ul}>
            <li className={MenuStyle.li}><Link to="/" className={MenuStyle.link}>Home</Link></li>
            <li className={MenuStyle.li}><Link to="/about" className={MenuStyle.link}>About</Link></li>
            <li className={MenuStyle.li}><Link to="/contact" className={MenuStyle.link}>Contact</Link></li>
            <li className={MenuStyle.li}><Link to="/owner" className={MenuStyle.link}>Owner</Link></li>
            <li className={MenuStyle.li}><Link to="/product" className={MenuStyle.link}>Product</Link></li>
            <li className={MenuStyle.li}><Link to="/product/add" className={MenuStyle.link}>Add Product</Link></li>
        </ul>
    </nav>
}

export default Menu;