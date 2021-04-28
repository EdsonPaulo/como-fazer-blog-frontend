import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box>
      <Flex
        px={6}
        py={4}
        bg="gray.700"
        shadow="base"
        alignItems="center"
        justifyContent="space-between"
        color="whiteAlpha.500"
      >
        <Heading>FOOTER</Heading>
      </Flex>
    </Box>
  );
};

export default Footer;
