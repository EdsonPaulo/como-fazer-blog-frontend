import { Box } from "@chakra-ui/react";
import React from "react";

import { Header } from "../../components";
import Routes from "../../routes";

const App: React.FC = () => {
  return (
    <Box backgroundColor="gray.100" minHeight="100vh">
      <header>
        <Header />
      </header>

      <Box maxW="100%">
        <Routes />
      </Box>
    </Box>
  );
};

export default App;
