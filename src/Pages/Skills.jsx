import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  Frontend: [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', icon: 'https://i.ibb.co/Mxv0sjFB/icons8-tailwind-css-48.png' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  ],
  Backend: [
    { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express JS', icon: 'https://i.ibb.co/zV1bcH6m/icons8-express-js-64.png' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ],
  Tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ]
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes floatCard {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-3 tracking-wider">
            TECHNICAL SKILLSET
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            My <span className="text-blue-400">Development</span> Skills
          </h2>
          <h3 className="text-xl sm:text-2xl text-gray-300">
            Tools & Technologies I Work With
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(skillCategories).map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          key={activeTab}
        >
          {skillCategories[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative group"
              style={{ animation: 'floatCard 6s ease-in-out infinite' }}
            >
              {/* Animated Gradient Border */}
              <div
                className="absolute -inset-0.5 rounded-2xl p-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(270deg, #3b82f6, #6366f1, #8b5cf6, #d946ef)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientMove 6s ease infinite',
                  borderRadius: '1rem'
                }}
              ></div>

              {/* Card Content */}
              <div className="relative bg-gray-800 rounded-2xl p-6 flex flex-col items-center h-full transition-all duration-300 group-hover:shadow-lg border border-gray-700">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </div>
                <p className="text-gray-200 font-medium text-center">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
