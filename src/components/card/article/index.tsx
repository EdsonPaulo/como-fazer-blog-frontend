import { Box, Badge, Text, Image, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { IArticle } from "../../../typescript/interfaces";

const ArticleCard: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Link
      to={`/artigo/${article.slug}`}
      as={RouterLink}
      maxW="sm"
      maxH="md"
      shadow="md"
      background="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={article.image}
        alt={article.title}
        maxHeight="50%"
        minHeight="50%"
        minW="100%"
      />

      <Box p="6" minHeight="50%">
        <Box d="flex" alignItems="center">
          <Badge borderRadius="full" px="2" colorScheme="orange">
            New
          </Badge>
          <Flex
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {article.categories.map((category) => (
              <Text fontSize="xx-small" ml="2">
                {category}
              </Text>
            ))}
          </Flex>
        </Box>

        <Box
          mt="2"
          as="h1"
          fontWeight="semibold"
          lineHeight="tight"
          noOfLines={2}
        >
          {article.title}
        </Box>

        <Text mt="2" as="h1" textAlign="justify" noOfLines={3}>
          {article.body}
        </Text>

        <Box mt="4" as="p" color="gray.600" fontSize="sm">
          {article.createdAt.toLocaleString()}
        </Box>
      </Box>
    </Link>
  );
};

export default ArticleCard;
