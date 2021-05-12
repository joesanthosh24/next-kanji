import { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";

import { closeDrawer } from "../../redux/actions/drawer-actions";

import { icons } from "../../icons";

import {
  DrawerMenu,
  DrawerItem,
  CloseDrawerIcon,
  CloseDrawerContainer,
} from "./drawer.styles";

const SideDrawer = ({ closeDrawer, isOpen }) => {
  const [drawerItems] = useState([
    { text: "Home", Icon: icons.Home(), link: "/" },
    { text: "Grades", Icon: icons.Grades(), link: "/grades" },
    { text: "Characters", Icon: icons.Characters(), link: "/kanji" },
    { text: "Study", Icon: icons.Study(), link: "/study-list" },
  ]);

  return (
    <DrawerMenu variant="persistent" anchor="left" open={isOpen}>
      <CloseDrawerContainer>
        <IconButton onClick={closeDrawer}>
          <CloseDrawerIcon />
        </IconButton>
      </CloseDrawerContainer>
      {drawerItems.map(({ text, Icon, link }) => (
        <Link key={text} href={link}>
          <DrawerItem>
            {Icon}
            <p>{text}</p>
          </DrawerItem>
        </Link>
      ))}
    </DrawerMenu>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.drawer.open,
});

const mapDispatchToProps = (dispatch) => ({
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
