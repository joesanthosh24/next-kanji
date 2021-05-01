import styled, { css } from "styled-components";

const regularCardStyles = css`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};

  h1 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const invertedCardStyles = css`
  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.light};

  h1 {
    color: ${(props) => props.theme.colors.light};
  }
`;

const secondaryCardStyles = css`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.secondary};
  border-color: ${(props) => props.theme.colors.secondary};

  h1 {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const tertiaryCardStyles = css`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.tertiary};
  border-color: ${(props) => props.theme.colors.tertiary};

  h1 {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

const getColorStyles = (props) => {
  if (props.secondary) {
    return secondaryCardStyles;
  }
  if (props.tertiary) {
    return tertiaryCardStyles;
  }
  if (props.inverted) {
    return invertedCardStyles;
  }

  return regularCardStyles;
};

const getBorderCurves = (props) => {
  if (props.curvedSm) {
    return css`
      border-radius: 5px;
    `;
  }
  if (props.curvedMd) {
    return css`
      border-radius: 10px;
    `;
  }
  if (props.curvedLg) {
    return css`
      border-radius: 17px;
    `;
  }
  if (props.curvedXl) {
    return css`
      border-radius: 20px;
    `;
  }

  return css`
    border-radius: 0px;
  `;
};

export const ItemCard = styled.div`
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 200px;
  width: 200px;
  line-height: 110px;
  text-align: center;
  transition: all 0.7s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid;
  padding: 80px;
  ${(props) => getColorStyles(props)}
  ${(props) => getBorderCurves(props)}

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    padding: 75px;

    :hover {
      transform: none;
    }
  }
`;
