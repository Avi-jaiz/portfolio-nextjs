import HomePage from "@/components/HomePage";
import Head from "next/head";
import type { NextPage } from "next";
import NavFooterLayout from "@/components/NavFooterLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Avishekh Jaiswal</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0 , user-scalable=0"
        />
      </Head>
      <NavFooterLayout>
        <HomePage />
      </NavFooterLayout>
    </>
  );
};

export default Home;
