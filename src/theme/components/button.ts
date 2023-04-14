import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    px: 10,
    py: 5,
    borderRadius: "11px",
  },
  variants: {
    primary: {
      px: 10,
      py: 5,
      bg: "danger",
      color: "white",
      _hover: {
        bg: "danger",
      },
    },
    secondary: {
      bg: "white",
      w: "300px",
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
