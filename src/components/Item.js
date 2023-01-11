import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setInCart] = useState(false);

  function toggleInCart(){
    if (isInCart === true) {
      setInCart(false);
    }else{
      setInCart(true);
    }
  }

  return (
    <li className={isInCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{isInCart? "Remove From Cart":"Add To Cart"}</button>
    </li>
  );
}

export default Item;
