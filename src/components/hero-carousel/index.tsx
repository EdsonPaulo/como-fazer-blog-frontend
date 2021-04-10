import React from "react";
import Image from "next/image";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";

  import '@brainhubeu/react-carousel/lib/style.css';
 
const HeroCarousel: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={1000}
      >
        <img width="40%" src="/images/img1.jpg" />
        <img width="40%" src="/images/img2.jpg" />
        <img width="40%" src="/images/img3.jpg" />
        <img  width="40%" src="/images/img4.jpg" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
