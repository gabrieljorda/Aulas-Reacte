import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import ItemPage from "./ItemPage";
import items from "./static-data";

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart} cart={cart} />
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart, cart }) => {
  switch (tab) {
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return <span>O carrinho vai aqui ({cart.length} itens)</span>;
    default:
      return null;
  }
};

export default App;
