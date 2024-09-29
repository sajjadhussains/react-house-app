import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles

import { Navigation, Pagination } from "swiper";

const HorizontalSlider = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, Pagination]} // Enable navigation and pagination
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Default for small screens
        pagination={{ clickable: true }} // Dots pagination
        navigation // Enable navigation arrows
        breakpoints={{
          // When window width is >= 640px (small screens)
          640: {
            slidesPerView: 1, // 1 item for small screens
          },
          // When window width is >= 768px (medium screens)
          768: {
            slidesPerView: 2, // 2 items for medium screens
          },
          // When window width is >= 1024px (large screens)
          1024: {
            slidesPerView: 3, // 3 items for large screens
          },
        }}
      >
        {/* Add as many SwiperSlide components as needed */}
        <SwiperSlide>
          <div className="bg-blue-300 h-64 flex items-center justify-center">
            <p>Item 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400 h-64 flex items-center justify-center">
            <p>Item 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 h-64 flex items-center justify-center">
            <p>Item 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-600 h-64 flex items-center justify-center">
            <p>Item 4</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
