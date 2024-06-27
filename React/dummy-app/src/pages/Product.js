function Product() {
    const productList = [
        {
            id: "p1",
            pname: "City Tour",
            price: 20000
        }, 
        {
            id: "p2",
            pname: "Forest Tour",
            price: 30000
        }
    ]
    return <div>
        {productList.map((item) => {
            return <li key={item.id}>{item.pname}</li>;
        })}
    </div>
}

export default Product;