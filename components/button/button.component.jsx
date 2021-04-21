import { Button } from "./button.styles";

const CustomButton = ({ children, color, background, ...otherProps }) => {
  return (
    <Button color={color} bgColor={background} {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
