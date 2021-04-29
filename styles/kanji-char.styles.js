import styled from "styled-components";

export const DisplayHeader = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fonts.xxl};
  margin-top: 100px;
  padding: 40px;
`;
