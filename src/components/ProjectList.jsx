import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SoftSell – Software Selling App",
    description:
      "A platform for selling and managing software licenses with secure login, product listings, and digital delivery integration.",
    stack: ["React", "Tailwind CSS"],
    link: "https://soft-sell-7ri2.vercel.app/",
  },
  {
    title: "BizPulse: Real-Time Event Automation",
    description:
      "Built a full-stack system to extract structured data from Excel forms into MongoDB, with real-time processing, participant search, and ML-ready backend.",
    stack: [
      "React.js",
      "MongoDB",
      "Flask",
      "Pandas",
      "NumPy",
      "Tailwind",
      "GSAP",
    ],
    link: "https://github.com/Oshika22/EventManagementAutomated", // Replace with actual link
  },
  {
    title: "UrbanOptima – Sustainable Development Platform",
    description:
      "Designed a web app to analyze urban resource usage and environmental impact; integrated analytics and dashboards for smart city planning insights.",
    stack: ["React.js", "Flask", "Python"],
    link: "https://susdev-jgfp.vercel.app/", // Replace with actual link
  },

];


function ProjectItem({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div className="">
      <motion.div
        layout
        transition={{ layout: { duration: 0.5 } }}
        onClick={() => setExpanded(!expanded)}
        className="flex bg-[#140152] text-white p-4 rounded-sm shadow-lg mb-4 cursor-pointer hover:shadow-xl"
      >
        <motion.div layout="position" className="text-xl font-semibold">
          {project.title}
        </motion.div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <p className="text-sm text-gray-200">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-[#865DFF] text-[#F0F0FF] px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-yellow-400 underline"
            >
              View Project →
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectList() {
  return (
    <div className="p-4 w-full flex flex-col mx-auto">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
      
    </div>
  );
}
