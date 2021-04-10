import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
