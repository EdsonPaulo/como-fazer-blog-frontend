import { Box, Container } from "@chakra-ui/react";
import React from "react";

import { Footer, Header } from "../../components";
import Routes from "../../routes";

const App: React.FC = () => {
  return (
    <Box backgroundColor="gray.50" minHeight="100vh">
      <header>
        <Header />
      </header>

      <Container py="7" maxW="container.sm">
        <Routes />
      </Container>

      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default App;
