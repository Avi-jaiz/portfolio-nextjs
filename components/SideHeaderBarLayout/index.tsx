
import React from "react";
import Footer from "../Footer";
import HeaderBar from "../HeaderBar";
import NavBar from "../NavBar";
import SideBar from "../SideBarMenu";

const SideHeaderBarLayout = (props: any) => {
  return (
    <div>
        <NavBar />
      <SideBar />
      <div>
        <HeaderBar headingTitle={props.headingTitle} />
      </div>
     {props.children}
     
    </div>
  );
};

export default SideHeaderBarLayout;
