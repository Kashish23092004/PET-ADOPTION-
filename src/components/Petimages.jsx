import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const PetImages = () => {
  const [images, setimages] = useState([]);

  useEffect(() => {
    fetch('./image.json')
      .then(res => res.json())
      .then(data => setimages(data))
      .catch(err => alert('failed to load images', err));
  }, []);

  const settings = {
    dots: true,
  infinite: true,  // <-- changed
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,  // <-- changed
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    }
  ]
  };

  return (
    <div className="slider-container px-4 py-8">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={`Pet ${index + 1}`}
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PetImages;
