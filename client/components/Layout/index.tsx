import React from "react";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
