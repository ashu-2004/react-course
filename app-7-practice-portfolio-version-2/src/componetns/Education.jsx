import { EDUCATION } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function Education() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Changes slide every 3 seconds
    pauseOnHover: true, // Pauses the carousel on hover
    arrows: true, // Display arrows for manual scrolling
  };

  return (
    <>
      <div id="Education" className="border-b border-neutral-900 pb-4 lg:m-24 m-5">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h1>
        <Slider {...settings}>
          {EDUCATION.map((item, index) => (
            <div key={index}>
              <div className="flex justify-around flex-wrap lg:justify-center mb-8">
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">
                    {item.role} -{" "}
                    <span className="text-sm text-purple-100">{item.side}</span>{" "}
                  </h6>
                  <p className="mb-4 text-neutral-400">
                    Institute: {item.institute}
                  </p>
                  <p className="mb-4 text-neutral-400">Board: {item.board}</p>
                  <p className="mb-4 text-neutral-400">
                    <span className="w mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      Score: {item.p}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Education;
