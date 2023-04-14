import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    px: 10,
    py: 5,
    w: "300px",
    borderRadius: "11px",
  },
  variants: {
    primary: {
      bg: "danger",
      color: "white",
      _hover: {
        bg: "danger",
      },
    },
    secondary: {
      bg: "white",
      color: "black",
      textTransform: "uppercase",
      borderRadius: "8px",
      _hover: {
        bg: "white",
      },
    },
  },
};

export default ButtonTheme;
