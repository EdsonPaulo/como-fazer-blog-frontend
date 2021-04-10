import { Box, Heading, Text } from "@chakra-ui/layout";

import Articles from "../articles";

import "./home.module.css";

export default function Home() {
  return (
    <>
      <Box
        p="5"
        textAlign="center"
        borderRadius="md"
        borderWidth="2px"
        background="facebook.50"
        borderColor="facebook.100"
      >
        <Heading mb="5">Olá, Bem vindo ao nosso Blog</Heading>
        <Text>
          Artigos diários com tutoriais e/ou dicas com 1000 formas de fazer mais
          de 1001 coisas do nosso dia-a-dia.
        </Text>
      </Box>

      <Box my="10">
        <Articles />
      </Box>
    </>
  );
}
