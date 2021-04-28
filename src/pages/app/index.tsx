import { Box } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

import { Footer, Header } from "../../components";
import { Routes, AdminRoutes } from "../../routes";

const App: React.FC = () => {
  const { pathname } = useLocation();

  const isAdmin = pathname.includes("admin");

  return (
    <Box backgroundColor="white" minHeight="100vh">
      {!isAdmin && (
        <header>
          <Header />
        </header>
      )}

      <Box minW="100%" minH="100vh">
        {isAdmin ? (
          <AdminRoutes />
        ) : (
          <Box py="6" px={{ base: "4", md: "10", lg: "16" }}>
            <Routes />/
          </Box>
        )}
      </Box>

      <header>
        <Footer />
      </header>
    </Box>
  );
};

export default App;
