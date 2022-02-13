import React, { useRef } from "react";
import styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../../../utils/testimonialsData";

const Testimonials = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  const nextSlide = () => {
    slider.current.slickNext();
  };

  const prevSlide = () => {
    slider.current.slickPrev();
  };

  return (
    <div className={styles.container}>
      <span onClick={prevSlide} className={styles.arrowLeft}>
        <svg
          width="61"
          height="8"
          viewBox="0 0 61 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z"
            fill="black"
          />
        </svg>
      </span>
      <Slider ref={slider} {...settings} className={styles.slider}>
        {testimonialsData.map((testimonial) => (
          <div className={styles.testimonial}>
            <span>"</span>
            <div className={styles.content}>
              <p>{testimonial.message}</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.position}</span>
            </div>
          </div>
        ))}
      </Slider>
      <span onClick={nextSlide} className={styles.arrowRight}>
        <svg
          width="61"
          height="8"
          viewBox="0 0 61 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  );
};

export default Testimonials;
