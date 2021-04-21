import { Drawer } from "@material-ui/core";
import styled from "styled-components";

export const DrawerMenu = styled(Drawer)`
  margin-right: 20px !important;
  width: 400px !important;
  flex-shrink: 0 !important;
  background-color: ${(props) => props.theme.colors.primary} !important;
`;

export const DrawerItem = styled.p`
  width: 200px;
`;

export const CloseDrawerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  border-bottom: 1px solid black;
  padding-bottom: 25px;
`;
