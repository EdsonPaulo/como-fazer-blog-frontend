import { Box, Heading } from "@chakra-ui/layout";

export default function About() {
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
        <Heading>Sobre Nós</Heading>
      </Box>
    </>
  );
}
