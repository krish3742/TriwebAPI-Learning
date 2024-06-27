import Style from './CustomWrapper.module.css';
function CustomWrapper(props) {
    return <div className={Style.wrapper}>
        {props.children}
    </div>
}

export default CustomWrapper;