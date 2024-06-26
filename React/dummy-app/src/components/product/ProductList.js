import ProductItem from "./ProductItem";
function ProductList(props) {
    return <div>
        {props.productList.map((item) => {
            return <ProductItem key={item._id} id={item._id} item={item}/>
        })}
    </div>
}

export default ProductList;