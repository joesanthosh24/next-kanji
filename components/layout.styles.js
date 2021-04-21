import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const IconButtonStyled = styled(IconButton)`
  position: absolute !important;
  margin-left: 10px !important;
  margin-top: 10px !important;

  :hover {
    color: lightgrey;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  font-size: 40px !important;
  color: white;
`;
