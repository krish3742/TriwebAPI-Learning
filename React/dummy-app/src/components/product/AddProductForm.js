import {useRef} from 'react';
import CustomWrapper from "../layout/CustomWrapper";
import Style from './AddProductForm.module.css';
function AddProductForm(props) {
    const pname_ref = useRef();
    const price_ref = useRef();
    const img_ref = useRef();
    const description_ref = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const pname = pname_ref.current.value;
        const price = price_ref.current.value;
        const img = img_ref.current.value;
        const description = description_ref.current.value;
        const productList = {
            pname,
            img,
            price,
            description
        }
        props.sendProduct(productList);
    }
    return <CustomWrapper>
        <form className={Style.form} onSubmit={submitHandler}>
            <div className={Style.div}>
                <label htmlFor='pname'>Product Name:</label>
                <input type="text" id="pname" ref={pname_ref}/>
            </div>
            <div className={Style.div}>
                <label htmlFor='img'>Product Image URL:</label>
                <input type="text" id="img" ref={img_ref}/>
            </div>
            <div className={Style.div}>
                <label htmlFor='price'>Product Price:</label>
                <input type="text" id="price" ref={price_ref}/>
            </div>
            <div className={Style.div}>
                <label htmlFor='description'>Product Description:</label>
                <textarea rows="3" id='description' ref={description_ref}/>
            </div>
            <div className={Style.button}>
                <input type="submit" />
            </div>
        </form>
    </CustomWrapper>
}

export default AddProductForm;