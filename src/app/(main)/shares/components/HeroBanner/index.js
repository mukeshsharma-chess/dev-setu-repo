"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LazyImage from "../atom/LazyImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroBanner = ({ slides }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-screen h-[300px] sm:h-[400px] md:h-screen"
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-gradient-to-r from-[#601d0f] to-[#601d0f]/80">
              {/* Left Content */}
              <div className="flex flex-col justify-center px-8 md:px-16 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
                  {slide.title}{" "}
                  <span className="text-yellow-400">{slide.highlight}</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
                  {slide.desc}
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="px-5 py-2 border border-white rounded-md bg-white text-black font-medium hover:bg-gray-100 transition">
                    Download App
                  </button>
                  <button className="px-5 py-2 border border-white rounded-md font-medium hover:bg-white hover:text-black transition">
                    Explore More
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-screen">
                <LazyImage
                  src={slide.image}
                  alt="Dev Setu Slide"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="swiper-button-next absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
