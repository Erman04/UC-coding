import React from "react";
import {
  Catalog,
  Contact,
  Landing,
  About,
  Services,
  Feature,
} from "../components";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>UC-Coding</title>
        <link rel="canonical" href="https://uc-coding.uz/" />
        <meta name="description" content="You are now home page" />
        <meta name="keywords" content="uc coding, software company in tashkent, tashkent website, website tashkent" />
      </Helmet>
      <Landing />
      <Catalog />
      <Feature />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
