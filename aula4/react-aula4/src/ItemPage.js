import React from "react";
import PropTypes from "prop-types";
import "./ItemPage.css";
import Item from "./Item";

function ItemPage({ items }) {
  return (
    <ul className="ItemPage-items">
      {items.map((item) => (
        <li key={item.id} className="ItemPage-item">
          <Item item={item } onAddToCart={()=> onAddToCart(item)}></Item>}
        </li>
      ))}
    </ul>
  );
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemPage;
