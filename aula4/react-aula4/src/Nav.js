import React from "react";

const Nav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "items", label: "Items" },
    { id: "cart", label: "Cart" },
  ];

  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;

  return (
    <nav className="App-nav">
      <ul role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className={itemClass(tab.id)}>
            <button role="tab" onClick={() => onTabChange(tab.id)}>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
