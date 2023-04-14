import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { InfoNavbarLinks } from "../../static/links";
import { Typography } from "../Typography";

export const InfoNavbar = () => {
  return (
    <Box px={5}>
      <HStack spacing={10} justifyContent={"flex-start"} align={"center"}>
        <Logo />
        {InfoNavbarLinks.map((el) => (
          <Typography key={el.id} color="light_black" uppercase>
            {el.label}
          </Typography>
        ))}
      </HStack>
    </Box>
  );
};
