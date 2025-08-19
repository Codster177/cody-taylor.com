import React, { Component, ReactNode } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

// PageWrapper includes the nav bar and the footer, and is included in every page.

interface Props {
  children: ReactNode;
  navBar?: ReactNode;
  footer?: ReactNode;
}

const PageWrapper = ({ children, navBar = null, footer = null }: Props) => {
  return (
    <>
      {navBar == null ? <NavBar /> : navBar}
      {children}
      {footer == null ? <Footer /> : footer}
    </>
  );
};

export default PageWrapper;
