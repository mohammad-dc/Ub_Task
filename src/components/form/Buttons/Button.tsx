import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary" }: IButtonProps) => {
  return <ChakraButton variant={variant}>{children}</ChakraButton>;
};
