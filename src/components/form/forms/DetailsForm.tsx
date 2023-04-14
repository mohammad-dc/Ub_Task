import React from "react";
import { Formik, Form } from "formik";
import { VStack, HStack } from "@chakra-ui/react";
import { Typography } from "../../Typography";
import { Textbox } from "../Inputs/Textbox";
import { TextareaBox } from "../Inputs/Textarea";
import { Button } from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { dataForm } from "../../../data/data";

export const DetailsForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    phone_code: "",
    company: "",
    country: "",
    message: "",
  };

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        dataForm.push(values);
        navigate("/thanks");
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => {
        return (
          <Form>
            <VStack align={"center"} spacing={10}>
              <Typography size={"3xl"}>Your Details</Typography>

              <HStack
                justify={"space-between"}
                align={"center"}
                w={"full"}
                spacing={10}
              >
                <Textbox
                  label="First Name"
                  type="text"
                  name="first_name"
                  isInvalid={
                    !!errors.first_name && (touched.first_name as boolean)
                  }
                  error={errors.first_name}
                />
                <Textbox
                  label="Last Name"
                  type="text"
                  name="last_name"
                  isInvalid={
                    !!errors.last_name && (touched.last_name as boolean)
                  }
                  error={errors.last_name}
                />
              </HStack>

              <HStack
                justify={"space-between"}
                align={"center"}
                w={"full"}
                spacing={10}
              >
                <Textbox
                  label="E-mail"
                  type="email"
                  name="email"
                  isInvalid={!!errors.email && (touched.email as boolean)}
                  error={errors.email}
                />
                <HStack justify={"flex-start"} w={"full"}>
                  <Textbox
                    label="Phone"
                    type="text"
                    name="phone_code"
                    w={"50%"}
                    isInvalid={
                      !!errors.phone_code && (touched.phone_code as boolean)
                    }
                    error={errors.last_name}
                  />
                  <Textbox
                    label="s"
                    type="text"
                    name="phone_number"
                    isInvalid={
                      !!errors.phone_number && (touched.phone_number as boolean)
                    }
                    error={errors.phone_number}
                  />
                </HStack>
              </HStack>
              <HStack
                justify={"space-between"}
                align={"center"}
                w={"full"}
                spacing={10}
              >
                <Textbox
                  label="Company"
                  type="text"
                  name="company"
                  isInvalid={!!errors.company && (touched.company as boolean)}
                  error={errors.company}
                />
                <Textbox
                  label="Country"
                  type="text"
                  name="country"
                  isInvalid={!!errors.country && (touched.country as boolean)}
                  error={errors.country}
                />
              </HStack>
              <TextareaBox
                label="Start the conversation"
                name="message"
                isInvalid={!!errors.message && (touched.message as boolean)}
                error={errors.message}
              />
              <HStack justify={"flex-start"} w={"full"}>
                <Button type={"submit"} onClick={() => null}>
                  Submit
                </Button>
              </HStack>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
};
