import Style from './ShowItem.module.css';
import { MdDelete } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
function ShowItem(props) {
    return (
        <div key={props._id} className={Style.div}>
            <div>
                <FaRegCheckCircle className={Style.check}/>
            </div>
            <div className={Style.text}>
                {props.item.value}
            </div>
            <div className={Style.delete}>
                <MdDelete onClick={() => props.deleteClick(props.item._id)} />
            </div>
        </div>
    )
}

export default ShowItem;