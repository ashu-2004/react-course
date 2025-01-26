import { MY_CONTENT } from "../constants";
import img from "../assets/profile1.png";
import { motion } from "framer-motion";

function Home() {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <>
      <div id="Home" className="border-b border-neutral-900 pb-1 lg:mb-35">
        {/* Use flex-col-reverse for smaller screens to bring the photo on top */}
        <div className="flex flex-col-reverse lg:flex-row justify-items-stretch">
          <div className="w-full lg:w-1/2  lg:ml-20">
            <div className="flex flex-col lg:items-start pl-4">
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="pb-24 pt-12 text-4xl font-bold tracking-tight text-center mt-4 lg:mt-16 lg:text-5xl"
              >
                Ashwini Thikole
              </motion.h1>
              <motion.span
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-4xl tracking-tight text-center text-transparent font-bold"
              >
                Web Developer
              </motion.span>
              <motion.p
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light text-justify"
              >
                {MY_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                className="rounded-3xl h-full [background:radial-gradient(95%_95%_at_50%_10%,#fff_0%,#63e_95%)]"
              >
                <img
                  className="rounded-3xl h-80 lg:h-96"
                  src={img}
                  alt="Ashwini Thikole"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
