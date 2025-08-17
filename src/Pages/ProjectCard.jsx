import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectCard = ({ project, onViewDetails, index }) => {
  const { name, description, images, technology, links } = project;
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Animation controls
  const controls = useAnimation();

  // Initial animation on mount
  useEffect(() => {
    if (!hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, hasAnimated]);

  // Image gallery effect
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isHovered]);

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-gray-800 flex flex-col h-full transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Gallery */}
      {images && images.length > 0 && (
        <motion.div 
          className="relative w-full h-52 overflow-hidden group"
          variants={itemVariants}
        >
          <motion.img
            src={images[currentImage].url}
            alt={name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={currentImage}
          />
          
          {/* Image indicators */}
          {images.length > 1 && (
            <motion.div 
              className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${index === currentImage ? 'bg-amber-400 w-4' : 'bg-gray-300 bg-opacity-50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Content */}
      <motion.div 
        className="p-6 flex flex-col flex-grow"
        variants={itemVariants}
      >
        <motion.div className="mb-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-gray-100 mb-2">{name}</h3>
          <motion.p 
            className="text-gray-300 text-sm line-clamp-3 mb-3"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Technology Tags */}
        {technology && (
          <motion.div 
            className="flex flex-wrap gap-2 mb-5"
            variants={itemVariants}
          >
            {technology.map((tech, i) => (
              <motion.span
                key={i}
                className="px-2.5 py-1 text-xs font-medium bg-gray-700 text-amber-100 rounded-full hover:bg-gray-600 transition-colors"
                variants={itemVariants}
                custom={i}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div 
          className="mt-auto space-y-3"
          variants={itemVariants}
        >
          <motion.div 
            className="grid grid-cols-2 gap-3"
            variants={itemVariants}
          >
            {links?.project && (
              <motion.a
                href={links.project}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 py-2 px-3 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live
              </motion.a>
            )}
            {links?.repo && (
              <motion.a
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 py-2 px-3 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </motion.a>
            )}
          </motion.div>
          
          <motion.button
            onClick={onViewDetails}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Details
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;