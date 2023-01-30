import React from "react";
import menu from "../../constants";

const SideBarMenu = () => {
  return (
    <div>
      <ul className="unordered-list">
        {menu.map((items) => (
          <li key={items.id}>{items.list}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarMenu;
