import React from "react";
import { ColorBanner } from "./ColorBanner";
import { InfoNavbar } from "./InfoNavbar";
import { LinksNavbar } from "./LinksNavbar";
import { Box } from "@chakra-ui/react";
import { colors } from "../../common/colors";
import { Footer } from "../Footer";

interface ILayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box bg={colors.bg_grey}>
      <ColorBanner />
      <InfoNavbar />
      <LinksNavbar />
      {children}
      <Footer />
    </Box>
  );
};
