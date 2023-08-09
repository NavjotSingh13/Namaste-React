// AppLayout component to show: Header, Body, Footer

import React, { lazy } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const Grocery = lazy(() => import ("./Grocery"));

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