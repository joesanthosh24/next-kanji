import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

import { DrawerMenu, DrawerItem, CloseDrawerContainer } from "./drawer.styles";

const SideDrawer = ({ isOpen, closeDrawer }) => {
  return (
    <DrawerMenu
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: {
          width: 240,
          backgroundColor: "red",
        },
      }}
    >
      <CloseDrawerContainer>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </CloseDrawerContainer>
      <DrawerItem>Home</DrawerItem>
    </DrawerMenu>
  );
};

export default SideDrawer;
