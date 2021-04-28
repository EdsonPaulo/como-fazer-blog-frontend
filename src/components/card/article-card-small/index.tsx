import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { IArticle } from "../../../typescript/interfaces";

const ArticleCardSmall: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Link
      as={RouterLink}
      to={{
        pathname: `/artigo/${article.slug}`,
        state: { article },
      }}
    >
      <Flex
        h={{ base: "130px", md: "140px", xl: "150px" }}
        flexGrow={1}
        width="100%"
        background="white"
        borderWidth="2px"
        borderColor="gray.300"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          flexGrow={1}
          src={article.image}
          alt={article.title}
          minH="100%"
        />

        <Flex flexGrow={1} p="4" minH="100%" flexDirection="column">
          <Text as="title" noOfLines={2} fontSize="lg" fontWeight="semibold">
            {article.title}
          </Text>
          <Text mt="3" as="body" noOfLines={3}>
            {article.body}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ArticleCardSmall;
