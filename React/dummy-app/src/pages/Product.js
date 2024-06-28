import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";
function Product() {
    let [productList, setProductList] = useState([]);
    let [dataFetching, setDataFetching] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3002/product")
            .then((response) => response.json())
            .then((product) => {
                setDataFetching(false);
                setProductList(product.data);
            })
            .catch((err) => console.log(err.message));
    }, []);
    if(dataFetching) {
        return <div>
            <p>Data is fetching...</p>
        </div>
    }
    return <div>
        <ProductList productList={productList}/>
    </div>
}

export default Product;