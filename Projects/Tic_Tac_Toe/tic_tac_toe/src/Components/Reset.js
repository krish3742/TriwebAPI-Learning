import Style from './Reset.module.css';
function Reset(props) {
    return (
        <button className={Style.button} onClick={props.onResetClick}>Reset</button>
    )
}

export default Reset;