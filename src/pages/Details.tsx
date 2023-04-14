import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Typography } from "../components/Typography";
import { DetailsForm } from "../components/form/forms/DetailsForm";
import { images } from "../common/images";
import { colors } from "../common/colors";

export const DetailsPage = () => {
  return (
    <Box bg={"white"}>
      <VStack spacing={20} py={10}>
        <Box px={40}>
          <Typography lineHight={9} size="lg">
            The International Foundation for Customer Experience in Government
            is a non-profit organisation headquartered in Canada. The foundation
            is supported by an International Consortium that forms an assembly
            of customer experience thought leaders from around the world. The
            foundation’s main mission is to build a community of thinkers,
            practitioners, and academics who collaborate to advance a customer
            experience body of knowledge and practice in the public sector.The
            foundation aims to define the conceptual framework for CX in the
            public sector as well as create and disseminate practical
            transformation tools that are contextually suited for the public
            sector. The foundation creates networking opportunities for
            passionate public sector customer experience executives,
            practitioners, and researchers across the globe.
          </Typography>
        </Box>
        <Box
          top={150}
          w={"full"}
          bg={` url(${images.homeBG}) no-repeat`}
          backgroundPosition={"top"}
          position={"relative"}
        >
          <Box
            position={"relative"}
            top={-40}
            m={"0 auto"}
            bg={"rgb(255,255,255, 0.8)"}
            backdropFilter="auto"
            backdropBlur="6px"
            w={"60%"}
            boxShadow={"lg"}
            borderRadius={25}
            py={5}
            px={20}
          >
            <DetailsForm />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
