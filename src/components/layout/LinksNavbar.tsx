import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { navbarLinks } from "../../static/links";
import { Typography } from "../Typography";
import { colors } from "../../common/colors";
import { Button } from "../form/Buttons/Button";

export const LinksNavbar = () => {
  return (
    <Box bg={colors.grey} p={5}>
      <HStack spacing={20} justifyContent={"flex-start"} alignItems={"center"}>
        {navbarLinks.map((el) => (
          <Typography size={"2xl"} key={el.id} weight="bold">
            {el.label}
          </Typography>
        ))}
        <Button variant="secondary">Search</Button>
      </HStack>
    </Box>
  );
};
