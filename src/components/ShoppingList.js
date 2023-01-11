import React, {useState, useMemo} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("");
  const [itemList, setItemList] = useState(items);

 

  function handleCategoryChange(e){
    setCategory(e.target.value);
  }

  function getFilteredList() {
    if(!selectedCategory){
      return itemList;
    }else if(selectedCategory === "All"){
      setItemList(items)
      return itemList
    }else{
      return itemList.filter(item => item.category === selectedCategory)
    }
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, itemList]);


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
