import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box minH="200px" bg="gray.700">
      <Flex
        px={6}
        py={4}
        minH="100%"
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
