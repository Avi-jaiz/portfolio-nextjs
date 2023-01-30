import React, { useState } from "react";
import SideBarMenu from "../SideBarMenu";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const sideMenuHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-red-600">
      <SideBarMenu />
    </div>
  );
};

export default SideBar;
