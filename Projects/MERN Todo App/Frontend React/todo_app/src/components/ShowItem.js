import { useState } from 'react';
import Style from './ShowItem.module.css';
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
function ShowItem(props) {
    const [flag, setFlag] = useState(false);
    function checkboxClick() {
        setFlag(!flag);
    }
    return (
        <div key={props._id} className={Style.div}>
            <div className={Style.checkdiv}>
                <input type='checkbox' id="value" className={Style.check} onClick={checkboxClick}></input>
                <div className={flag ? Style.checked : Style.unchecked}>
                    {props.item.value}
                </div>
            </div>
            <div className={Style.checkdiv}>
                <div>
                    <FaPencilAlt className={Style.edit} />
                </div>
                <div>
                    <MdDelete className={Style.delete} onClick={() => props.deleteClick(props.item._id)} />
                </div>
            </div>
        </div>
    )
}

export default ShowItem;