import React from "react";

const HeaderBar = ({ headingTitle }: any) => {
  return <div>{headingTitle || "Default Page"}</div>;
};

export default HeaderBar;
