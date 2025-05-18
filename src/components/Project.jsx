import React from "react";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";
export const Project = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center gap-5">
      <h1 className="justify-centre leading-tight bg-gradient-to-r from-[#865DFF] to-[#00B4D8] bg-clip-text text-transparent text-6xl font-bold">
        Projects
      </h1>
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col align-center items-center"
      >
        <ProjectList />
        <a href="https://github.com/Oshika22/" className="px-6 py-3 bg-[#865DFF] hover:bg-[#7a50e6] text-white rounded-full font-semibold transition duration-300 text-center">
            View More
      </a>
      </motion.div>
    </div>
  );
};
