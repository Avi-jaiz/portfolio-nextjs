import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout = (props: any) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};
