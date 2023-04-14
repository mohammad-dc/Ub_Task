import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "formik";
import { colors } from "../../../common/colors";

interface ITextareaBoxProps {
  isInvalid: boolean;
  name: string;
  error?: string;
  label?: string;
  w?: string;
}

export const TextareaBox = ({
  isInvalid,
  name,
  error,
  label,
  w = "full",
}: ITextareaBoxProps) => {
  return (
    <FormControl w={w} isInvalid={isInvalid}>
      {label && (
        <FormLabel color={label === "s" ? colors.white : colors.black}>
          {label}
        </FormLabel>
      )}
      <Field
        as={Textarea}
        id={name}
        name={name}
        borderRadius={"8px"}
        h={200}
        variant="filled"
        bg={colors.bg_grey}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
