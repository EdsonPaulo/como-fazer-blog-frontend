import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import { IArticle } from "../../../typescript/interfaces";

const ShareOptions: React.FC<{
  article: IArticle;
}> = () => {
  return (
    <Box textAlign="center">
      <Text mb="3" fontSize="xl">Compartilhar:</Text>
      <Flex alignItems="center" justifyContent="center">
        <Button
          size="sm"
          leftIcon={<FaFacebookF />}
          iconSpacing="2"
          variant="solid"
          colorScheme="facebook"
          onClick={() => {}}
        >
          Partilhar
        </Button>

        <Button
          mx="2"
          size="sm"
          leftIcon={<FaTwitter />}
          iconSpacing="2"
          variant="solid"
          colorScheme="twitter"
          onClick={() => {}}
        >
          Tweet
        </Button>

        <Button
          mr="2"
          size="sm"
          leftIcon={<FaEnvelope />}
          iconSpacing="2"
          variant="solid"
          colorScheme="blackAlpha"
          onClick={() => {}}
        >
          Email
        </Button>

        <Button
          size="sm"
          leftIcon={<FaWhatsapp />}
          iconSpacing="2"
          variant="solid"
          colorScheme="green"
          onClick={() => {}}
        >
          Whatsapp
        </Button>
      </Flex>
    </Box>
  );
};

export default ShareOptions;
