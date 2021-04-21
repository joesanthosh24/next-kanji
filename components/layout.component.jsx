import { useState } from "react";
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
        position: "relative",
      }}
    >
      <IconButtonStyled onClick={() => setIsOpen(true)}>
        <MenuIconStyled />
      </IconButtonStyled>
      <SideDrawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
