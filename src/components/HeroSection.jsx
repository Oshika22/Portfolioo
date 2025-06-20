// HeroSection.jsx
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 sm:px-10 bg-gradient-to-b from-[#140152] to-[#0D00A4]">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Hey, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#865DFF] to-[#00B4D8]">
            Oshika
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-[#DADAFB]"
        >
          A curious mind who loves turning challenges into smart, tech-driven solutions. Whether building AI-powered platforms like BizPulse or helping peers get ready for their dream jobs, I’m all about creating impact through innovation and teamwork. This portfolio is a peek into my journey, projects, and the passion that drives me every day. Dive in and let’s explore together!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#865DFF] hover:bg-[#7a50e6] text-white rounded-full font-semibold transition duration-300"
          >
            View Projects
          </a>
          <a
            href=""
            download
            className="px-6 py-3 border border-white hover:bg-white hover:text-[#0D00A4] rounded-full font-semibold transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mt-8 flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="mailto:oshika00@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#865DFF] transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/oshika22" // replace with actual GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#865DFF] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/oshika-linkedin" // replace with actual LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#865DFF] transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-16 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

