import "./ProductList.css";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  return (
    <div className="container">
      <h2>Product List</h2>

      <ul>
        {products.map((p) => (
          <li key={p.id} className="product-item">
            <span>{p.name}</span>
            <span className="price">₹{p.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
