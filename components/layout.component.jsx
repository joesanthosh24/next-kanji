import { useState } from "react";
import Head from "next/head";

import { MenuIconStyled, IconButtonStyled } from "./layout.styles";

import Footer from "./footer/footer.component";
import SideDrawer from "./drawer/drawer.component";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#131212",
      }}
    >
      <Head>
        <title>Kanji App</title>
        <link rel="icon" href="/images/fire-kanji.svg" />
      </Head>
      <IconButtonStyled onClick={() => setIsOpen(true)}>
        <MenuIconStyled />
      </IconButtonStyled>
      <SideDrawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
      {children}
    </div>
  );
};

export default Layout;
