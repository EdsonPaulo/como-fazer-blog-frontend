import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import { ArticleCategories } from "src/typescript/enums";

import Articles from "../articles";

const Categories: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    ArticleCategories.Tudo
  );
  const categories = Object.values(ArticleCategories);
  return (
    <Flex alignItems="center" flexWrap="wrap">
      {categories.map((category, index) => (
        <Button
          m="2"
          minW="100"
          size="sm"
          color="gray.700"
          borderRadius="lg"
          textTransform="uppercase"
          onClick={() => setSelectedCategory(category)}
          background={selectedCategory === category ? "blue.100" : "gray.200"}
        >
          {category}
        </Button>
      ))}
    </Flex>
  );
};

const SectionTitle: FC<{ title: string }> = ({ title }) => (
  <Flex mb="12" alignItems="center" justifyContent="space-between">
    <Box mr="12">
      <Heading ml="0.5" as="h3" size="lg" textTransform="lowercase">
        {title}
      </Heading>
      <Box
        h="0.5"
        mt="3"
        maxW="24"
        borderRadius="lg"
        shadow="2xl"
        background="brand.primary"
      />
    </Box>
    <Categories />
  </Flex>
);

const Home: FC = () => {
  return (
    <>
      {/**
      <Box
        p="5"
        textAlign="center"
        borderRadius="md"
        borderWidth="2px"
        background="facebook.50"
        borderColor="facebook.100"
      >
        <Heading as="h2" mb="5">Olá, Bem vindo ao nosso Blog</Heading>
        <Text>
          Artigos diários com tutoriais e/ou dicas com 1000 formas de fazer mais
          de 1001 coisas do nosso dia-a-dia.
        </Text>
      </Box>
       */}

      <Grid h="400px" templateColumns={{ base: "100%", lg: "repeat(3, 1fr)" }}>
        <GridItem
          py="12"
          bg="gray.100"
          colSpan={2}
          pr={["8", "12"]}
          pl={{ base: "8", md: "12", lg: "20" }}
        >
          <SectionTitle title="artigos recentes" />
          <Articles />
        </GridItem>

        <GridItem
          py="12"
          colSpan={1}
          bg="gray.200"
          pl={["8", "12"]}
          pr={{ base: "8", md: "12", lg: "20" }}
        >
          <Text>Artigos diários com tutoriais</Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
