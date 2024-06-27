import ProductItem from "./ProductItem";
function ProductList(props) {
    return <div>
        {props.productList.map((item) => {
            return <ProductItem key={item.id} item={item}/>
        })}
    </div>
}

export default ProductList;