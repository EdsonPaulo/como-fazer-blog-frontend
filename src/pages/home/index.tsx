import { Box, Flex } from "@chakra-ui/layout";
import React, { FC } from "react";

import { Categories } from "src/components";
import ArticlesList from "./content/articles-list";
import HeroSlideShow from "./content/hero-slide-show";

const Home: FC = () => {
  return (
    <Box p="10">
      <HeroSlideShow />

      <Flex flex={1} flexDirection={{ base: "column", lg: "row" }}>
        <Box py="12" flex={{ base: "1", md: "8", xl: "7" }}>
          <ArticlesList title="últimos artigos" />
        </Box>

        <Box pt={{base: "0", md: "0", lg: "36" }} flex={{ base: "1",   md: "1",  lg: "1",  xl: "3" }}>
          <Categories />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
