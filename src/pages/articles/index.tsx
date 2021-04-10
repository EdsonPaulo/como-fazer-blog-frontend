import React, { useEffect, useState } from "react";

import { IArticle } from "src/typescript/interfaces";

import { fetchArticles } from "../../api";

const Article: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const getArticles = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await fetchArticles({});
      if (data) setArticles(data);
    } catch (error) {
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
      {loading ? <h1>Carregando...</h1> : <p>{JSON.stringify(articles)}</p>}
    </div>
  );
};

export default Article;
