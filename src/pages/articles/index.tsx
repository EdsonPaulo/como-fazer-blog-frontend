import {
  Stack,
  Skeleton,
  createStandaloneToast,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArticleCard } from "src/components";

import { IArticle } from "src/typescript/interfaces";

import { fetchArticles } from "../../api";

const Articles: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const toast = createStandaloneToast();

  const getArticles = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await fetchArticles({});
      if (data) setArticles(data);
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
    <div>
      {loading ? (
        <>
          <Stack>
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
          </Stack>
        </>
      ) : (
        <SimpleGrid columns={3} spacing={5}>
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default Articles;
