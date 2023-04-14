import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../common/colors";

export const ColorBanner = () => {
  const { dark_green, green, yellow, orange, red } = colors;
  const colors_list = [dark_green, green, yellow, orange, red];
  return (
    <Box>
      <HStack justifyContent={"flex-end"} align={"center"} spacing={0}>
        {colors_list.map((el) => (
          <Box key={Math.random()} bg={el} w={"120px"} h={"30px"}></Box>
        ))}
      </HStack>
    </Box>
  );
};
