import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { useArticlesContext } from "src/contexts/articles";
import { ArticleCategories } from "src/typescript/enums";

const categories = Object.values(ArticleCategories);

const Categories: FC = () => {
  const { selectedCategory, setSelectedCategory } = useArticlesContext();

  return (
    <Box w="100%" minH="400px" p="6" bg="gray.100" borderRadius="lg">
      <Heading as="h4" mb="3" textAlign="center">
        Categorias
      </Heading>

      <Flex alignItems="center" justify="center" flexWrap="wrap">
        {categories.map((category, index) => (
          <Button
            key={index}
            m="2"
            minW="70"
            borderRadius="lg"
            textTransform="capitalize"
            onClick={() => setSelectedCategory(category)}
            background={
              selectedCategory === category ? "brand.accent" : "gray.200"
            }
            color={
              selectedCategory === category ? "whiteAlpha.900" : "gray.900"
            }
          >
            {category}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Categories;
