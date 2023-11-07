import React from "react";
import Slider from "react-slick";

export default function Carousel({ darkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Additional settings can be added here
  };

  return (
    <div>
      <Slider {...settings}>
        <div
          className={`h-[75vh] ${
            darkMode ? "bg-[#1a202c] text-white" : "bg-[#DAA520] text-white"
          } homestyle sm:h-[70vh] w-screen cursor-pointer m-0 p-0 flex flex-col items-end justify-start`}
        >
          {/* Content for slide 1 */}
          {/* ... */}
        </div>
        <div>
          {/* Content for slide 2 */}
          {/* ... */}
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <h1
        className={`${
          darkMode ? "text-black" : "text-black"
        } text-center mt-10 font-bold text-4xl`}
        id="shop"
      >
        Latest Products
      </h1>
    </div>
  );
}
