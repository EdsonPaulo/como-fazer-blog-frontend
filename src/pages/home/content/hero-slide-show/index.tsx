import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { ArticleCardBig } from "src/components";
import { ArticleCategories } from "src/typescript/enums";
import { IArticle } from "src/typescript/interfaces";

const HeroSlideShow: React.FC = () => {
  const topArticles: IArticle[] = [
    {
      title: "Where does it come from?",
      category: ArticleCategories.Entretenimento,
      createdAt: new Date(),
      image:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    } as IArticle,
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: ArticleCategories.Entretenimento,
      createdAt: new Date(),
      image:
        "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
    } as IArticle,
    {
      title: "Where can I get some??",
      category: ArticleCategories.Entretenimento,
      createdAt: new Date(),
      image:
        "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
    } as IArticle,
  ];

  return (
    <>
      <Grid
        h="600px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={3}>
          <ArticleCardBig article={topArticles[0]} />
        </GridItem>
        <GridItem colSpan={2} rowSpan={1}>
          <ArticleCardBig article={topArticles[1]} />
        </GridItem>
        <GridItem colSpan={2} rowSpan={1}>
          <ArticleCardBig article={topArticles[2]} />
        </GridItem>
      </Grid>
    </>
  );
};

export default HeroSlideShow;
