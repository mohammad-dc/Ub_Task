import React from "react";
import { Box, VStack, HStack } from "@chakra-ui/react";
import { images } from "../common/images";
import { Typography } from "./Typography";
import { colors } from "../common/colors";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <Box
      bg={`${colors.dark_green} url(${images.gressBG + ";"})`}
      w={"full"}
      py={20}
    >
      <VStack spacing={20} align={"center"} w={"full"}>
        <HStack spacing={5} justify={"space-around"} w={"full"}>
          <VStack align={"center"} spacing={3}>
            <Typography uppercase weight={400} color={"white"}>
              phone number
            </Typography>
            <Typography uppercase weight={400} color={"white"}>
              +16134219978
            </Typography>
          </VStack>
          <VStack align={"center"} spacing={3}>
            <Typography uppercase weight={400} color={"white"}>
              address
            </Typography>
            <Typography uppercase weight={400} color={"white"}>
              119 Woliston cres,kanata, on, K2W 1G5
            </Typography>
          </VStack>
          <VStack align={"center"} spacing={3}>
            <Typography uppercase weight={400} color={"white"}>
              email
            </Typography>
            <Typography uppercase weight={400} color={"white"}>
              info@govcx.org
            </Typography>
          </VStack>
        </HStack>
        <HStack align={"center"} spacing={20}>
          <Icon icon={"facebookIcon"} />
          <Icon icon={"twitterIcons"} />
          <Icon icon={"instagramIcon"} />
          <Icon icon={"linkedinIcon"} />
        </HStack>
        <Typography uppercase weight={400} color={"white"}>
          © 2023 | privacy & policy | cookie preferences
        </Typography>
      </VStack>
    </Box>
  );
};
