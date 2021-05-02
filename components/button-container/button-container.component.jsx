import { Container } from "./button-container.styles";

const ButtonContainer = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default ButtonContainer;
