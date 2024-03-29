import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const images = [
    {
      hinhanh: "bg-1.png"
    },
    {
      hinhanh: "bk-tra-sua-2.jpg"
    },
    {
      hinhanh: "br-tra-sua-3.jpg"
    },
    // Thêm các hình ảnh khác vào đây
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slideStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

const firstImageStyle = {
  width: '100%',
  height: '320px',
};

const otherImageStyle = {
  maxWidth: '100%',
  height: '320px',
  margin: '0 auto',
};

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={slideStyle}>
            <img
              src={'../'+image.hinhanh}
              alt=""
              style={index === 0 ? firstImageStyle : otherImageStyle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;