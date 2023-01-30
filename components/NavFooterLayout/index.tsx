import react from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const NavFooterLayout = (props: any, headingTitle: string) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default NavFooterLayout;
