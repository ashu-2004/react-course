import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="Projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="flex justify-center flex-wrap gap-10">
        {PROJECTS.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key="item"
          >
            <div className="flex flex-col justify-center items-center shadow-2xl rounded-2xl h-[390px] w-[290px]">
              <img className="rounded-t-2xl h-auto" src={item.image} alt="" />
              <span className="mt-5 font-semibold">{item.title}</span>
              <p className="text-sm text-purple-100 text-center">
                {item.description}
              </p>
              <p className="mt-4 text-neutral-400">
                {item.technologies.map((item1) => (
                  <span
                    key={item1}
                    className="w mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {item1}
                  </span>
                ))}
              </p>
              <a
                href={item.viewdemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:underline"
              >
                View Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
