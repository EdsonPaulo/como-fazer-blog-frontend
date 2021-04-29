import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { IArticle } from "../../../typescript/interfaces";

const ArticleCardBig: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Box w="100%" h="100%" position="relative" borderRadius="md">
      <Image
        w="100%"
        h="100%"
        borderRadius="md"
        zIndex="1"
        position="absolute"
        src={article.image}
        alt={article.title}
      />

      <Flex
        w="100%"
        h="100%"
        p="10"
        zIndex="100"
        flexDirection="column"
        justifyContent="flex-end"
        borderRadius="md"
        position="absolute"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <Link
          as={RouterLink}
          to={{
            pathname: `/artigo/${article.slug}`,
            state: { article },
          }}
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="orange.300"
            textTransform="uppercase"
            letterSpacing="2px"
          >
            {article.category}
          </Text>

          <Heading
            my="3"
            fontSize="3xl"
            color="white"
            _hover={{ color: "facebook" }}
            fontWeight="extrabold"
            as="h1"
          >
            {article.title}
          </Heading>

          <Text as="span" fontSize="lg" color="whiteAlpha.800">
            {moment(new Date(article.createdAt), true).format(
              "DD [de] MMMM [de] YYYY"
            )}
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default ArticleCardBig;
