import ColorTheme from "./colors";
import ButtonTheme from "./components/button";
import { extendTheme } from "@chakra-ui/react";

const override = {
  colors: ColorTheme,
  components: {
    Button: ButtonTheme,
  },
};

export const theme = extendTheme(override);
