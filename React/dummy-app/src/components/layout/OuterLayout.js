import Menu from "./Menu";
import Style from './OuterLayout.module.css';
function OuterLayout(props) {
    return <div className={Style.main}>
        <Menu />
        {props.children}
    </div>
}

export default OuterLayout;