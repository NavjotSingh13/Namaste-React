// AppLayout component to show: Header, Body, Footer

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';


const AppLayout = () => {
    return (
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    );
  };

  export default AppLayout;