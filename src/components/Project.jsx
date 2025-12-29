import React from "react";
import { motion } from "framer-motion";
// import ProjectList from "./ProjectList";
// export const Project = () => {
//   return (
//     <div id="projects" className="flex flex-col justify-center items-center gap-5">
//       <h1 className="justify-centre leading-tight bg-gradient-to-r from-[#865DFF] to-[#00B4D8] bg-clip-text text-transparent text-6xl font-bold">
//         Projects
//       </h1>
//       <motion.div
//         initial={{ scale: 0.9 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.3 }}
//         viewport={{ once: true }}
//         className="flex flex-col align-center items-center"
//       >
//         <ProjectList />
//         <a href="https://github.com/Oshika22/" className="px-6 py-3 bg-[#865DFF] hover:bg-[#7a50e6] text-white rounded-full font-semibold transition duration-300 text-center">
//             View More
//       </a>
//       </motion.div>
//     </div>
//   );
// };

import ProjectCard from "./ProjectCard";
import { MissionMeter, EventraLogo, packTrackLogo, urbanOptLogo, docFormatter, multiAgent } from "../assets/images";

const projects = [

  {
    title: "Eventra",
    description: "Real-Time Data Extraction & Database Integration System (Pre-incubated at MUJ) ",
    tools: "Reactjs, Flask, MongoDB, Pandas, Numpy",
    image: EventraLogo,
    liveLink: "https://github.com/Oshika22/EventManagement",
    videoLink: "https://drive.google.com/file/d/1UiMzYgl5gA4BRYHxa0GtQVvoi-IlQLNl/view?usp=sharing",
    gitLink: "https://github.com/Oshika22/EventManagement"
  },
  {
    title: "AI-Powered Word Document Formatter",
    description: "AI-driven system that analyzes Word documents and automatically applies consistent formatting based on user instructions or document structure.",
    tools: "Python, LangChain, LangGraph, OpenAI API, python-docx",
    image: docFormatter,
    liveLink: "https://github.com/Oshika22/DocFormatter",
    videoLink: "",
    gitLink: "https://github.com/Oshika22/DocFormatter"
  },
  {
    title: "Multi-Agent Information Routing Engine",
    description: "Multi-agent system that routes PDFs, JSON data, and Emails to specialized agents for structured extraction and automated response generation.",
    tools: "Python, Flask, LangChain, MySQL, LLM APIs",
    image: multiAgent,
    liveLink: "https://github.com/Oshika22/DocFormatter",
    videoLink: "",
    gitLink: "https://github.com/Oshika22/DocFormatter"
  },

  {
    title: "PackTrack: Powered by Red-Black Tree",
    description: "A package tracking system, featuring interactive tree visualization and efficient search, insert, and delete operations.",
    tools: "ReactJS, JavaScript, Tailwind CSS, Red-Black Tree (Custom)",
    image: packTrackLogo,
    liveLink: "https://package-tracker-rb-tree.vercel.app/",
    videoLink: "https://package-tracker-rb-tree.vercel.app/",
    gitLink: "https://github.com/Oshika22/packageTrackerRBTree/"
  },
  {
    title: "UrbanOptima",
    description: "UrbanOptima is a powerful AI-powered dashboard designed to optimize urban sustainability through data-driven decision-making.",
    tools: "ReactJS, Flask, scikit-learn, OpenRouter API, Chart.js/Recharts, Python, ThreeJS ",
    image: urbanOptLogo,
    liveLink: "https://susdev-jgfp.vercel.app/",
    videoLink: "https://susdev-jgfp.vercel.app/",
    gitLink: "https://github.com/Oshika22/susdev"
  },
  {
    title: "MissionMeter",
    description: "Space budget planner app with AI features.",
    tools: "ReactJS, Flask, scikit-learn, OpenRouter API, Chart.js/Recharts, Python, ThreeJS",
    image: MissionMeter,
    liveLink: "https://mission-meter-7l66.vercel.app/",
    videoLink: "https://drive.google.com/file/d/1q3PBis1tAy_kOxeuqIu_0Jc5unHLRwVX/view?usp=sharing",
    gitLink: "https://github.com/Oshika22/MissionMeter"
  },


  // Add more...
];
export const Project = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center  m-10">
      <h1 className="justify-centre leading-tight bg-gradient-to-r from-[#865DFF] to-[#00B4D8] bg-clip-text text-transparent text-6xl font-bold m-10">
           Projects
      </h1>
       <p className="text-sm text-gray-300 mb-10">#Note: Project Might Be Deployed Frontend Only In that case kindly Refer the The Video To See the Whole Working Of the Project</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 sm:w-full lg:w-3/4">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
      <a href="https://github.com/Oshika22/" className="px-6 py-3 bg-[#865DFF] hover:bg-[#7a50e6] text-white rounded-full font-semibold transition duration-300 text-center mt-10">
        View More
      </a>
    </div>
  );
}

