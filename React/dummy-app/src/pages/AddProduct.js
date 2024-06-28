import AddProductForm from "../components/product/AddProductForm";
import {useNavigate} from 'react-router-dom';
function AddProduct() {
    const Navigate = useNavigate();
    function sendProduct(newProduct) {
        fetch("http://localhost:3002/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => Navigate("/"))
        .catch((err) => console.log(err)); 
    }
    return <AddProductForm sendProduct={sendProduct}/>
}

export default AddProduct;