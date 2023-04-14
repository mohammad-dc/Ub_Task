import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick: (_e: any) => void;
  type?: "button" | "submit";
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: IButtonProps) => {
  return (
    <ChakraButton onClick={onClick} variant={variant} type={type}>
      {children}
    </ChakraButton>
  );
};
