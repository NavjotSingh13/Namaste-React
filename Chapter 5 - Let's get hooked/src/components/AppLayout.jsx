// AppLayout component to show: Header, Body, Footer

import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const AppLayout = () => {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  };

  export default AppLayout;