import {
  Box,
  createStandaloneToast,
  Flex,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";

import { fetchArticles } from "../../../../api";
import { ArticleCard } from "../../../../components";
import { IArticle } from "../../../../typescript/interfaces";

import {
  ArticlesSliderProps,
  SectionTitleProps,
  sliderSettings,
} from "./articles-slider.types";

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

const ArticlesSlider: FC<ArticlesSliderProps> = ({
  title,
  queryKey,
  queryValue,
}) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const toast = createStandaloneToast();

  const getArticles = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await fetchArticles({ query: { [queryKey]: queryValue } });
      if (data) setArticles([...data, ...data]);
    } catch (error) {
      toast({
        title: error?.message,
        status: "error",
        duration: 9000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="1">
      {loading ? (
        <Flex justifyContent="center" alignItems="center">
          <Skeleton width="300px" height="400px" borderRadius="md" />
          <Skeleton width="300px" height="400px" mx="8" borderRadius="md" />
          <Skeleton width="300px" height="400px" borderRadius="md" />
        </Flex>
      ) : (
        <Box>
          <SectionTitle title={title} />
          <Slider {...sliderSettings}>
            {articles.map((article, index) => (
              <Box
                key={index}
                maxWidth={{ base: "280px", md: "300px" }}
                minWidth={{ base: "280px", md: "300px" }}
                height="400px"
              >
                <ArticleCard key={article._id} article={article} />
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default ArticlesSlider;
