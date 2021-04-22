import { Drawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

export const DrawerMenu = styled(Drawer)`
  margin-right: 20px !important;
  width: 400px !important;
  flex-shrink: 0 !important;
  background-color: ${(props) => props.theme.colors.dark} !important;
`;

export const DrawerItem = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  text-align: center;
  font-size: ${(props) => props.theme.fonts.md};
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  border-radius: 30px;
  transition: all 0.4s ease-in-out;

  p {
    margin-left: 30px;
  }

  :hover {
    color: ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.light};
    border: 1px solid ${(props) => props.theme.colors.light};
  }
`;

export const CloseDrawerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-bottom: 25px;
`;

export const CloseDrawerIcon = styled(CloseIcon)`
  color: ${(props) => props.theme.colors.light} !important;
`;
