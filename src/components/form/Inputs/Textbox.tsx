import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field } from "formik";
import { colors } from "../../../common/colors";

interface ITextboxProps {
  isInvalid: boolean;
  name: string;
  type: string;
  error?: string;
  label?: string;
  w?: string;
}

export const Textbox = ({
  isInvalid,
  name,
  type,
  error,
  label,
  w = "full",
}: ITextboxProps) => {
  return (
    <FormControl w={w} isInvalid={isInvalid}>
      {label && (
        <FormLabel color={label === "s" ? colors.white : colors.black}>
          {label}
        </FormLabel>
      )}
      <Field
        as={Input}
        id={name}
        name={name}
        type={type}
        borderRadius={"8px"}
        size={"lg"}
        variant="filled"
        bg={colors.bg_grey}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
