function Owner(props) {
    return <div>
        <h1>{props.owner} dummy react app</h1>
        <button onClick={props.newOwner}>Change owner</button>
    </div>
}

export default Owner;