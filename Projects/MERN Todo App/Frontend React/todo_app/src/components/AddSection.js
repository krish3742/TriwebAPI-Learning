import { useRef } from 'react';
import Style from './AddSection.module.css';
function AddSection(props) {
    const value_ref = useRef();
    function handleClick(evt) {
        evt.preventDefault();
        const value = value_ref.current.value;
        const data = {
            value
        }
        props.addClick(data);
        value_ref.current.value = null;
    }
    return (
        <form className={Style.form}>
            <input type="text" id="value" ref={value_ref} className={Style.input} placeholder='Enter your text...'></input>
            <button type="submit" className={Style.button} onClick={handleClick}>Add</button>
        </form>
    )
}

export default AddSection;