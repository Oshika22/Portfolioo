import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaNodeJs,FaAws
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiFlask, SiMysql, SiGreensock, SiPhp,
  SiNumpy, SiPandas, SiScikitlearn, SiGooglecloud, SiC, SiCplusplus
} from "react-icons/si";


const skills = [
  // Programming Languages
  { icon: <FaPython className="text-yellow-300" />, name: "Python" },
  // { icon: <SiC className="text-blue-300" />, name: "C" },
  { icon: <SiCplusplus className="text-blue-400" />, name: "C++" },

  // Web Tech (Frontend + Design)
  { icon: <FaReact className="text-cyan-400" />, name: "React" },

  { icon: <FaJs className="text-yellow-300" />, name: "JavaScript" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiGreensock className="text-green-500" />, name: "GSAP" },

  // Backend & Frameworks
  { icon: <SiFlask className="text-gray-300" />, name: "Flask" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiPhp className="text-indigo-400" />, name: "PHP (CodeIgniter)" },

  // Databases
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },

  // Cloud
  { icon: <FaAws className="text-yellow-400" />, name: "Google Cloud" },
  { icon: <SiGooglecloud className="text-yellow-400" />, name: "Google Cloud" },

  // Data Science & ML
  { icon: <SiNumpy className="text-purple-300" />, name: "NumPy" },
  { icon: <SiPandas className="text-pink-300" />, name: "Pandas" },
  { icon: <SiScikitlearn className="text-orange-300" />, name: "Scikit-Learn" },

  // Tools
  { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#04052E] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          My <span className="text-[#865DFF]">Skills</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl mb-2 transition-transform group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
