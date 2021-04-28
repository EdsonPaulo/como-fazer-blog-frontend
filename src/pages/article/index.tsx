/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Badge,
  Box,
  CircularProgress,
  Container,
  createStandaloneToast,
  Divider,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import React, { FC, useCallback, useEffect, useState } from "react";
import { BiCalendar, BiMessageAltDetail } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { fetchArticleBySlug, viewArticle } from "../../api";
import { IArticle } from "../../typescript/interfaces";
import { PageBreadcumb } from "../../components";

import Comments from "./comments";
import ShareOptions from "./share-options";
import ROUTES from "src/constants/routes";

const Article: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(false);
  const [loadingView, setLoadingView] = useState(false);
  const [article, setArticle] = useState<IArticle | null>(null);
  const toast = createStandaloneToast();

  const getArticle = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await fetchArticleBySlug({ slug });
      setArticle(data);
    } catch (error) {
      toast({
        title: error?.message,
        status: "error",
        duration: 8000,
      });
    } finally {
      setLoading(false);
    }
  }, [loading, slug, toast]);

  const handleViewArticle = useCallback(async () => {
    if (loadingView) return;
    setLoadingView(true);
    try {
      await viewArticle({ slug });
    } catch (error) {
    } finally {
      setLoadingView(false);
    }
  }, [loadingView, slug]);

  useEffect(() => {
    if (article) handleViewArticle();
  }, [article]);

  useEffect(() => {
    getArticle();
  }, [slug]);

  return (
    <Container py="10" maxWidth="container.lg" background="whatsapp">
      {loading && !article ? (
        <Box
          minH="100%"
          minW="100%"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          carregando
          <CircularProgress isIndeterminate color="green" />
        </Box>
      ) : (
        article && (
          <Box>
            <Box justifyContent="center" mb="6">
              <PageBreadcumb
                paths={[
                  { label: "artigos", route: ROUTES.Articles },
                  { label: slug, current: true },
                ]}
              />
            </Box>

            <Box
              mb="6"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="gray.300"
              background="white"
            >
              <Image
                w="100%"
                maxH="400px"
                borderTopRadius="lg"
                src={article?.image}
                alt={article?.title}
              />

              <Box p="8">
                {!article?.category && (
                  <Badge
                    py="1.5"
                    px="4"
                    fontSize="sm"
                    borderRadius="md"
                    textTransform="uppercase"
                    colorScheme="blue"
                    fontWeight="bold"
                    letterSpacing="wide"
                  >
                    {article?.category}
                  </Badge>
                )}

                <Heading my="4" as="h1">
                  {article?.title}
                </Heading>

                <Flex alignItems="center" justifyContent="space-between">
                  <Flex alignItems="center">
                    <Avatar size="xs" name="Edson Gregório" />
                    <Text ml="1.5">Edson Gregório</Text>
                    <Text mx="4" color="gray.500" fontWeight="semibold">
                      |
                    </Text>
                    <Text color="gray.700">
                      {moment(new Date(article.createdAt), true).fromNow()}
                    </Text>
                  </Flex>

                  <Flex alignItems="center" color="gray.800">
                    <FiEye aria-label="visualizações" />
                    <Text ml="1" mr="3" as="span">
                      {article?.views}
                    </Text>

                    <BiMessageAltDetail aria-label="comentários" />
                    <Text as="span" ml="1">
                      {article.comments.length}
                    </Text>
                  </Flex>
                </Flex>

                <Text my="6" as="p" textAlign="justify">
                  {article?.body}
                </Text>

                <Flex alignItems="center" flexWrap="wrap">
                  {article?.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      mr="2"
                      size="md"
                      variant="subtle"
                      borderRadius="md"
                      fontSize="small"
                      textTransform="lowercase"
                      colorScheme="gray"
                      letterSpacing="wide"
                    >
                      {`#${tag}`}
                    </Tag>
                  ))}
                  <Tag
                    mr="2"
                    size="md"
                    variant="subtle"
                    borderRadius="md"
                    fontSize="small"
                    textTransform="lowercase"
                    colorScheme="gray"
                    letterSpacing="wide"
                  >
                    {`#desnes`}
                  </Tag>
                </Flex>

                <Flex
                  mt="6"
                  alignItems="center"
                  justifyContent="space-between"
                  color="gray.600"
                >
                  <Flex>
                    <BiCalendar />
                    <Text ml="1" as="span">
                      {`Publicado a ${moment(
                        new Date(article.createdAt),
                        true
                      ).format("DD [de] MMMM [de] YYYY")}`}
                    </Text>
                  </Flex>
                </Flex>

                <Divider my="6" />

                <ShareOptions article={article} />
              </Box>
            </Box>

            <Comments slug={article?.slug} comments={article?.comments} />
          </Box>
        )
      )}
    </Container>
  );
};

export default Article;
