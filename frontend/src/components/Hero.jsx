import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider1 from "../assets/banner-1.jpg";
import Slider2 from "../assets/banner-2.jpg";

const Hero = () => {
  return (
    <Swiper
      className="w-full h-[600px]"
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
    >
      <SwiperSlide>
        <div>
          <img
            src={Slider1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            src={Slider2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
