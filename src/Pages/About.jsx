import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/me3.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaGlobe } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsPhone, BsCodeSlash } from 'react-icons/bs';
import { RiUser3Line } from 'react-icons/ri';

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariant = {
    hidden: { scale: 0.9, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const headerVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600 filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariant}
        >
          <motion.p 
            className="text-blue-400 font-medium mb-3 tracking-wider"
            variants={headerVariant}
          >
            PROFESSIONAL PROFILE
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={headerVariant}
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            variants={imageVariant}
            className="flex justify-center lg:justify-end relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="relative group">
              <motion.img
                src={img}
                alt="Akash Ahamed"
                className="rounded-xl w-full max-w-md border-4 border-blue-500/20 shadow-2xl transform transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-blue-500/20"
                whileHover={{ scale: 1.02 }}
              />
              <div className="absolute inset-0 bg-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_3s_ease-in-out_infinite] transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="space-y-8"
          >
            <motion.div variants={item}>
              <motion.h3 
                className="text-2xl font-semibold text-white mb-6 flex items-center"
                whileHover={{ x: 5 }}
              >
                <RiUser3Line className="text-blue-400 mr-3 text-xl" />
                <span className="relative">
                  Personal Info
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-6"
                whileHover={{ scale: 1.005 }}
              >
                I'm <span className="text-blue-300 font-medium">Jahanoby Ahamed</span>, a dedicated MERN stack developer with 2+ years of experience crafting robust web applications. My expertise spans the entire development lifecycle, from conceptualization to deployment, with a focus on creating efficient, scalable solutions that deliver exceptional user experiences.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div 
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all"
                whileHover={{ y: -5 }}
                variants={item}
              >
                <div className="flex items-center mb-2">
                  <HiOutlineMail className="text-blue-400 mr-3 text-xl" />
                  <h4 className="text-white font-medium">Email</h4>
                </div>
                <p className="text-gray-300 text-sm">jahanoby2122@gmail.com</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all"
                whileHover={{ y: -5 }}
                variants={item}
              >
                <div className="flex items-center mb-2">
                  <BsPhone className="text-blue-400 mr-3 text-xl" />
                  <h4 className="text-white font-medium">Phone</h4>
                </div>
                <p className="text-gray-300 text-sm">+880 1733-596607</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all"
                whileHover={{ y: -5 }}
                variants={item}
              >
                <div className="flex items-center mb-2">
                  <HiOutlineLocationMarker className="text-blue-400 mr-3 text-xl" />
                  <h4 className="text-white font-medium">Location</h4>
                </div>
                <p className="text-gray-300 text-sm">Gaibandha, Bangladesh</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all"
                whileHover={{ y: -5 }}
                variants={item}
              >
                <div className="flex items-center mb-2">
                  <BsCodeSlash className="text-blue-400 mr-3 text-xl" />
                  <h4 className="text-white font-medium">Speciality</h4>
                </div>
                <p className="text-gray-300 text-sm">MERN Stack Development</p>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              variants={container}
              className="flex flex-wrap gap-4 pt-4"
            >
      
        
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;