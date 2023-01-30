import SideHeaderBarLayout from "@/components/SideHeaderBarLayout";
import React from "react";
import NavFooterLayout from "../../components/NavFooterLayout";

const About = (props:any) => {
  const headingTitle ="About this is amazing"
  return <SideHeaderBarLayout headingTitle={headingTitle}>About</SideHeaderBarLayout>;
};

export default About;
