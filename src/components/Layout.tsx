import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container flex flex-col min-h-screen min-w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
