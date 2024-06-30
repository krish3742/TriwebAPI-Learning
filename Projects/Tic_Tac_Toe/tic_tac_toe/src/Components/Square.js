import Style from'./Square.module.css';
function Square(props) {
    return (
        <button className={Style.button} onClick={props.onSquareClick}>{props.value}</button>
    )
}

export default Square;