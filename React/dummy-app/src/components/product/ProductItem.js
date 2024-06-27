import CustomWrapper from "../layout/CustomWrapper";
import Style from './ProductItem.module.css';
function ProductItem(props) {
    return <div key={props.item.id} className={Style.text}>
        <CustomWrapper>
            <div>
                <img src={props.item.img} alt="No-image" />
            </div>
            <div>
                <h3>{props.item.pname}</h3>
                <p>{props.item.description}</p>
                <p>Rs {props.item.price}</p>
            </div>
            <div>
                <button>Purchase</button>
            </div>
        </CustomWrapper>
    </div>;
}

export default ProductItem;