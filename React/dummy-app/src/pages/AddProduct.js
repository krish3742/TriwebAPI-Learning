import AddProductForm from "../components/product/AddProductForm";
function AddProduct() {
    function sendProduct(newProduct) {
        console.log(newProduct)
    }
    return <AddProductForm sendProduct={sendProduct}/>
}

export default AddProduct;