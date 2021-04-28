import { Settings } from "react-slick";

export interface SectionTitleProps {
  title: string;
}

export interface ArticlesSliderProps {
  title: string;
  queryKey: string;
  queryValue: string;
}

export const sliderSettings: Settings = {
  arrows: true,
  speed: 500,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  /**
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
   */
};
