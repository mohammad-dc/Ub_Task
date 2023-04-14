import React from "react";
import { Icon as ChakraIcon } from "@chakra-ui/react";
import { icons } from "../common/icons";
import { IconTypes } from "../types/common";
import { colors } from "../common/colors";

interface IIconProps {
  icon: IconTypes;
}
export const Icon = ({ icon }: IIconProps) => {
  return <ChakraIcon as={icons[icon]} color={colors.white} boxSize={10} />;
};
