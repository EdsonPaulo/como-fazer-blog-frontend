import { Box, Badge, Text, Image, Flex, Link, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

import { IArticle } from "../../../typescript/interfaces";

const ArticleCard: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Link
      as={RouterLink}
      to={{
        pathname: `/artigo/${article.slug}`,
        state: { article },
      }}
    >
      <Flex
        flex={1}
        flexDirection="column"
        background="white"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ shadow: "xl" }}
        h="100%"
        w="100%"
        maxH="100%"
        maxW="100%"
      >
        <Image
          flex={1}
          src={article.image}
          alt={article.title}
          minW="100%"
          minH="50%"
          maxH="50%"
        />

        <Flex
          justifyContent="space-between"
          flexDirection="column"
          p="5"
          flex={1}
        >
          <Box>
            <Box>
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
            </Box>

            <Box>
              <Heading
                my="2"
                as="title"
                noOfLines={1}
                lineHeight="tight"
                fontSize="lg"
              >
                {article.title}
              </Heading>
            </Box>
            <Box>
              <Text as="body" textAlign="justify" noOfLines={2}>
                {article.body}
              </Text>
            </Box>
          </Box>

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
        </Flex>
      </Flex>
    </Link>
  );
};

export default ArticleCard;
