import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from "../assets/certificates/1.jpg";
import img2 from "../assets/certificates/2.jpg";
import img3 from "../assets/certificates/3.jpg";
import img4 from "../assets/certificates/4.jpg";
import img5 from "../assets/certificates/5.png";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    { id: 1, src: img1, alt: "Certificate 1" },
    { id: 2, src: img2, alt: "Certificate 2" },
    { id: 3, src: img3, alt: "Certificate 3" },
    { id: 4, src: img4, alt: "Certificate 4" },
    { id: 5, src: img5, alt: "Certificate 5" },
  ];

  const mainCarousel = useRef(null);
  const thumbnailCarousel = useRef(null);

  useEffect(() => {
    if (mainCarousel.current && thumbnailCarousel.current) {
      mainCarousel.current.splide.sync(thumbnailCarousel.current.splide);
    }
  }, []);

  return (
    <div
      id="Education"
      className="border-b border-neutral-900 pb-4 lg:m-24 m-5"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>
      <div className="slider-container">
        <Splide
          ref={mainCarousel}
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
            arrows: true,
            heightRatio: 0.5,
          }}
          className="main-carousel"
        >
          {certificates.map((certificate) => (
            <SplideSlide key={certificate.id}>
              <img src={certificate.src} alt={certificate.alt} />
            </SplideSlide>
          ))}
        </Splide>

        <div className="thumbnail-container">
          <Splide
            ref={thumbnailCarousel}
            options={{
              fixedWidth: 100,
              fixedHeight: 65,
              isNavigation: true,
              gap: 10,
              pagination: false,
              rewind: true,
              cover: true,
              focus: false,
              breakpoints: {
                550: {
                  fixedWidth: 60,
                  fixedHeight: 44,
                },
              },
            }}
            className="thumbnail-carousel"
          >
            {certificates.map((certificate) => (
              <SplideSlide key={certificate.id}>
                <img src={certificate.src} alt={certificate.alt} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
