import styled, { css } from "styled-components";

const buttonMargins = css`
  margin-left: ${(props) =>
    props.mlLg ? "15px" : props.mlMd ? "10px" : props.mlSm ? "5px" : 0};
  margin-right: ${(props) =>
    props.mrLg ? "15px" : props.mrMd ? "10px" : props.mrSm ? "5px" : 0};
  margin-top: ${(props) =>
    props.mtLg ? "15px" : props.mtMd ? "10px" : props.mtSm ? "5px" : 0};
`;

const buttonStyles = css`
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.light};

  :hover {
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.light};
  }
`;

const invertedButtonStyles = css`
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.dark};

  :hover {
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

const getButtonSize = (props) => {
  if (props.md) {
    return css`
      width: 100px;
    `;
  }
  if (props.lg) {
    return css`
      width: 130px;
    `;
  }
  if (props.xl) {
    return css`
      width: 150px;
    `;
  }
  if (props.fit) {
    return css`
      width: 100%;
    `;
  }

  return css`
    width: 80px;
  `;
};

const getButtonStyles = (props) => {
  return props.invertedBtn ? invertedButtonStyles : buttonStyles;
};

export const Button = styled.button`
  padding: 10px;
  border-radius: 20px;
  outline: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  height: 60px;
  ${getButtonStyles}
  ${buttonMargins}
  ${(props) => getButtonSize(props)}
`;
