const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Mouse", price: 50 }
  ];

  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          // Conditional style: if price > 500, apply color: red
          style={{ color: product.price > 500 ? "red" : "black" }}
        >
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;