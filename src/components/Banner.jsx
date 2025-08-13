import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaDownload,
  FaPaperPlane,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import img from '../assets/hi.json';
import Lottie from "lottie-react";
import { motion } from 'framer-motion';

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const codeBoxVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto text-white px-4 py-20">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Right Side - Code Box */}
        <motion.div 
          variants={codeBoxVariants}
          className="relative bg-gradient-to-br from-[#0a172e] to-[#0f1c38] rounded-xl p-6 sm:p-8 w-full shadow-2xl border border-blue-900/50 min-h-[300px] sm:min-h-[350px] overflow-hidden order-1 md:order-2"
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
          
          {/* Top Bar: Dots + Profile Image */}
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-blue-800/50">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <motion.img
              src="https://i.ibb.co/sJ0QxkF/profile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-white"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>

          {/* Code Content */}
          <pre className="text-sm sm:text-base mt-2 sm:mt-6">
            <code className="text-green-400 font-mono">
              <span className="text-red-500">const</span> programmer = {'{'}{'\n'}
              &nbsp;&nbsp;name: <span className="text-blue-300">'Akash Ahamed'</span>,{'\n'}
              &nbsp;&nbsp;skills: [<span className="text-blue-300">'React'</span>,{' '}
              <span className="text-blue-300">'Next.js'</span>,{' '}
              <span className="text-blue-300">'Node.js'</span>,{' '}
              <span className="text-blue-300">'MongoDB'</span>],{'\n'}
              &nbsp;&nbsp;hardWorker: <span className="text-blue-400">true</span>,{'\n'}
              &nbsp;&nbsp;quickLearner: <span className="text-blue-400">true</span>,{'\n'}
              &nbsp;&nbsp;location: <span className="text-blue-300">'Gaibandha, Bangladesh'</span>,{'\n'}
              &nbsp;&nbsp;hireable: () =&gt; {'{'}{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">if</span> (yourNeed === <span className="text-blue-300">'MERN'</span>) {'{'}{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">return</span> <span className="text-blue-300">'Let\\'s build something amazing! 😍'</span>{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;{'}'} <span className="text-red-400">else</span> {'{'}{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">return</span> <span className="text-blue-300">'I can adapt to your requirements'</span>{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;{'}'}{'\n'}
              {'}'}{'\n'}
              {'}'}
            </code>
          </pre>
        </motion.div>

        {/* Left Side - Personal Info */}
        <motion.div 
          className="space-y-6 order-2 md:order-1"
          variants={containerVariants}
        >
          <motion.p 
            className="text-blue-400 text-lg flex items-center"
            variants={itemVariants}
          >
            Hello There <span className="inline-block text-4"> 
              <div className='w-8 text-blue-500'> 
                <Lottie animationData={img} loop={true} />
              </div> 
            </span>
          </motion.p>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            variants={itemVariants}
          >
            I'm <span className="text-white">Akash Ahamed</span>
          </motion.h1>

          <motion.div 
            className="flex items-center gap-2"
            variants={itemVariants}
          >
            <span className="border-b-4 border-blue-500 w-8 inline-block"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
              <Typewriter
                words={['Frontend Developer', 'React Specialist', 'MERN Stack Developer', 'Full Stack Engineer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </motion.div>

          <motion.p 
            className="text-gray-300 max-w-md text-lg leading-relaxed"
            variants={itemVariants}
          >
            Crafting beautiful, responsive web applications with modern technologies and pixel-perfect attention to detail.
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            {[
              { icon: <FaFacebookF />, color: 'hover:bg-[#1877f2]' },
              { icon: <FaLinkedinIn />, color: 'hover:bg-[#0a66c2]' },
              { icon: <FaTwitter />, color: 'hover:bg-[#1da1f2]' },
              { icon: <FaInstagram />, color: 'hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743]' },
              { icon: <FaGithub />, color: 'hover:bg-[#333]' },
            ].map((social, index) => (
              <motion.a 
                href="#" 
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`w-12 h-12 border-2 border-blue-500 text-white rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:border-transparent`}>
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mt-6"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane /> Contact Me
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;