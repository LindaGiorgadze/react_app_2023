import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const Carousel = () => {
  const carouselSlides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const html = '<a href="test">Test Link</a>';
  return (
    <>
      <h3>Carousel</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          //   type: "progressbar",
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
      >
        {carouselSlides.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="carouselSlide">{slide}</div>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <div>{html}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
