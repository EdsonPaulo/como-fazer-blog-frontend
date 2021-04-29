import { createStandaloneToast } from "@chakra-ui/react";
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ArticleCategories, Shared } from "src/typescript/enums";
import { IArticle } from "src/typescript/interfaces";
import { fetchArticles } from "../../api";
import { ArticlesContextProps } from "./articles.types";

export const ArticlesContext = createContext<ArticlesContextProps | null>(null);

export const ArticlesContextProvider: FC = (props) => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategories>(
    ArticleCategories.Tudo
  );
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const toast = createStandaloneToast();

  const getArticles = useCallback(
    async (query: Record<string, string> = {}) => {
      setLoading(true);
      try {
        const {
          data: { data, total: totalFromResponse },
        } = await fetchArticles({
          query: {
            [Shared.Category]:
              selectedCategory === ArticleCategories.Tudo
                ? undefined
                : selectedCategory,
          },
          ...query,
        });
        if (data) setArticles([...data]);
        setTotal(totalFromResponse);
      } catch (error) {
        toast({
          title: error?.message,
          status: "error",
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    },
    [selectedCategory, toast]
  );

  const memoizedValue = useMemo(
    () => ({
      getArticles,
      articles,
      selectedCategory,
      setSelectedCategory,
      loading,
      total,
      setArticles,
    }),
    [articles, getArticles, loading, selectedCategory, total]
  );

  return <ArticlesContext.Provider value={memoizedValue} {...props} />;
};

export const useArticlesContext = () =>
  useContext(ArticlesContext) as ArticlesContextProps;
