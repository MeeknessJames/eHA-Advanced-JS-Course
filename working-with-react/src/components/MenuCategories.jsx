const MenuCategories = () => {
  const menu = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] }
  ];

  return (
    <div>
      {menu.map((group, index) => (
        <div key={index}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;