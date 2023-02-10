import React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
