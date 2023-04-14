import React, { useEffect, useState } from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { Typography } from "../components/Typography";

export const ThanksPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  });
  return (
    <Flex
      justify={"center"}
      align={"center"}
      h={"100vh"}
      w={"full"}
      bg={"white"}
    >
      {open ? (
        <p>Loading...</p>
      ) : (
        <VStack spacing={10}>
          <Typography color="black" size={"6xl"}>
            Thank you
          </Typography>
          <div style={{ marginLeft: 200 }}>
            <Typography color="black" size={"md"} uppercase>
              We will contact you shortly
            </Typography>
          </div>
        </VStack>
      )}
    </Flex>
  );
};
