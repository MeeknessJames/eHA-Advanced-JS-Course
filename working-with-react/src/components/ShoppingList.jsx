const ShoppingList = () => {
  const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

  return (
    <ul>
      {shoppingList.map((item, index) => (
        <li
          key={index}
          // Conditional style: if the item is "Eggs", apply text-decoration: line-through
          style={{ textDecoration: item === "Eggs" ? "line-through" : "none" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;