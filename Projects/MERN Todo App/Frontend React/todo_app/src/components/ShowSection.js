import ShowItem from './ShowItem';
function ShowSection(props) {
    return (
        <div>
            {props.list.map((item) => {
                return <ShowItem key={item._id} item={item} deleteClick={(_id) => props.deleteClick(_id)}/>
            })}
        </div>
    )
}

export default ShowSection;