import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./movieslider.css"; // Custom styles

const MovieSlider = ({ movies }) => {
  return (
    <div className="movie-slider-container">
      <h2>Trending Now</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5} // Adjust for responsiveness
        navigation
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
