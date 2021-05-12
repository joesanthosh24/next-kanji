import Head from "next/head";
import { connect } from "react-redux";

import { MenuIconStyled, IconButtonStyled } from "./layout.styles";

import { openDrawer } from "../redux/actions/drawer-actions";

import SideDrawer from "./drawer/drawer.component";

const Layout = ({ children, openDrawer }) => {
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
      <IconButtonStyled onClick={() => openDrawer()}>
        <MenuIconStyled />
      </IconButtonStyled>
      <SideDrawer />
      {children}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openDrawer: () => dispatch(openDrawer()),
});

export default connect(null, mapDispatchToProps)(Layout);
