import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { images } from "../common/images";

export const Logo = () => {
  return (
    <Box width={100} h={120}>
      <Image src={images.logo} alt="Logo" />
    </Box>
  );
};
