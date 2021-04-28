import { Button } from "@chakra-ui/button";
import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/layout";
import React, { FC, useState } from "react";

import { ArticleCategories } from "../../typescript/enums";

import ArticlesSlider from "./content/articles-slider";
import HeroSlideShow from "./content/hero-slide-show";

const Categories: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    ArticleCategories.Tudo
  );
  const categories = Object.values(ArticleCategories);
  return (
    <Box>
      <Heading as="h4" mb="3" textAlign="center">
        Categorias
      </Heading>

      <Flex alignItems="center" justify="center" flexWrap="wrap">
        {categories.map((category, index) => (
          <Button
            key={index}
            m="1"
            minW="70"
            size="sm"
            color="gray.700"
            borderRadius="lg"
            textTransform="capitalize"
            onClick={() => setSelectedCategory(category)}
            background={selectedCategory === category ? "blue.200" : "gray.200"}
          >
            {category}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

const Home: FC = () => {
  return (
    <Box p="10">
      <HeroSlideShow />

      <Box mb="8">
        <Categories />
      </Box>

      <ArticlesSlider title="últimos artigos" queryKey="" queryValue="" />

      <ArticlesSlider title="mais populares" queryKey="" queryValue="" />

      <Grid h="400px" templateColumns={{ base: "100%", lg: "repeat(10, 1fr)" }}>
        <GridItem
          py="12"
          //bg="gray.100"
          colSpan={7}
          //pr={["8", "12"]}
          //pl={{ base: "8", md: "12", lg: "20" }}
        ></GridItem>

        <GridItem
          py="12"
          colSpan={3}
          bg="gray.200"
          pl={["6", "10"]}
          pr={{ base: "6", md: "10", lg: "14" }}
        >
          <Categories />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
