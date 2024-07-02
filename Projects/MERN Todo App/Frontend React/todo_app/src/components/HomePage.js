import axios from 'axios';
import { useState, useEffect } from 'react';
import AddSection from './AddSection';
import Heading from './Heading';
import ShowSection from './ShowSection';
function HomePage() {
    const [list, setList] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        axios
            .get("http://localhost:3002/list/get")
            .then((response) => {
                setList(response.data.data);
            })
            .catch((error) => console.log(error));
    }, [flag])
    function deleteClick(_id) {
        axios
            .delete("http://localhost:3002/list/delete", {_id})
            .then((res) => {
                setFlag(!flag);
            })
            .catch((error) => console.log(error));
    }
    function addClick(data) {
        axios
            .post("http://localhost:3002/list/add", data)
            .then((res) => {
                setFlag(!flag);
            })
            .catch((error) => console.log(error));
    }
    return (
        <>
            <Heading />
            <AddSection addClick={(data) => addClick(data)}/>
            <ShowSection list={list} deleteClick={(_id) => deleteClick(_id)}/>
        </>
    )
}

export default HomePage;