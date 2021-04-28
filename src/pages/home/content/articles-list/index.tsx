import { Box, Flex, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useArticlesContext } from "src/contexts/articles";
import { IArticle } from "src/typescript/interfaces";
import { ArticleCard, Pagination } from "../../../../components";
import { ArticlesListProps, SectionTitleProps } from "./articles-list.types";

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
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
  </Flex>
);

const ArticlesList: FC<ArticlesListProps> = ({ title }) => {
  const { getArticles, articles, loading } = useArticlesContext();
  const [articlesToDisplay, setArticlesToDisplay] = useState<IArticle[]>([]);
  const [articlesPage, setArticlesPage] = useState(1);

  const paginate = useCallback(() => {
    if (articles.length > 0) {
      setArticlesToDisplay(
        articles.slice((articlesPage - 1) * 4, 4 * articlesPage)
      );
    }
  }, [articles, articlesPage]);

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    paginate();
  }, [paginate, articlesPage]);

  return (
    <Box>
      {loading ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} spacing={6}>
          <Skeleton width="300px" height="100%" borderRadius="md" />
          <Skeleton width="300px" height="100%" mx="8" borderRadius="md" />
          <Skeleton width="300px" height="100%" borderRadius="md" />
        </SimpleGrid>
      ) : (
        <>
          <SectionTitle title={title} />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{base: 6, md: 2}}>
            {articlesToDisplay.map((article, index) => (
              <Box
                key={index}
                w={{ base: "100%", md: "320px" }}
                minH={{ base: "380px", md: "400px", xl: "420px" }}
                maxH={{ base: "380px", md: "400px", xl: "420px" }}
              >
                <ArticleCard key={article._id} article={article} />
              </Box>
            ))}
          </SimpleGrid>
          <Flex mt="6" justifyContent="center">
            <Pagination
              count={articles.length}
              onChange={(value) => setArticlesPage(value)}
            />
          </Flex>
        </>
      )}
    </Box>
  );
};

export default ArticlesList;
