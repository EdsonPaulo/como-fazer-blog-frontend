import { Box, Badge, Text, Image, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

import { IArticle } from "../../../typescript/interfaces";

const ArticleCard: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Box
      shadow="sm"
      height="100%"
      width="100%"
      background="white"
      borderWidth="2px"
      borderColor="gray.300"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={article.image}
        alt={article.title}
        maxHeight="50%"
        minHeight="50%"
        minW="100%"
      />

      <Box p="5" minHeight="50%">
        <Flex alignItems="center">
          <Badge
            p="2"
            borderRadius="md"
            fontSize="small"
            textTransform="uppercase"
            colorScheme="facebook"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            {article.category}
          </Badge>
        </Flex>

        <Link as={RouterLink} to={`/artigo/${article.slug}`}>
          <Text
            my="2"
            as="title"
            noOfLines={2}
            lineHeight="tight"
            fontWeight="semibold"
          >
            {article.title}
          </Text>
        </Link>

        <Text as="body" textAlign="justify" noOfLines={2}>
          {article.body}
        </Text>

        <Flex
          mt="4"
          color="gray.800"
          fontSize="sm"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text as="span">
            {moment(new Date(article.createdAt), true).format(
              "[aos] DD [de] MMMM"
            )}
          </Text>

          <Flex alignItems="center">
            <FiEye aria-label="curtidas" />
            <Text ml="1" mr="3" as="span">
              {article.views}
            </Text>

            <BiMessageAltDetail aria-label="comentários" />
            <Text as="span" ml="1">
              {article.comments.length}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ArticleCard;
