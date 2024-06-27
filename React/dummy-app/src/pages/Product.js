import ProductList from "../components/product/ProductList";
function Product() {
    const productList = [
        {
            id: "p1",
            img: "https://drive.google.com/file/d/1renuWX15PSa9vwOFRAL4H-WvvU2rPRFz/view?usp=sharing",
            pname: "City Tour",
            description: "It's a city tour",
            price: 20000
        }, 
        {
            id: "p2",
            img: "https://drive.google.com/file/d/1jr2e-y-1QybcWphdkvIT55_dxr1pnBmR/view",
            pname: "Forest Tour",
            description: "It's a forest tour",
            price: 30000
        }
    ]
    return <div>
        <ProductList productList={productList}/>
    </div>
}

export default Product;