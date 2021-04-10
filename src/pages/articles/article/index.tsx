import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IArticle } from "../../../typescript/interfaces";
import { fetchArticleBySlug } from "../../../api";

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<IArticle | null>(null);

  const getArticle = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await fetchArticleBySlug({ slug });
      if (data) setArticle(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div>
      {loading ? <h1>Carregando...</h1> : <p>{JSON.stringify(article)}</p>}
    </div>
  );
};

export default Article;
