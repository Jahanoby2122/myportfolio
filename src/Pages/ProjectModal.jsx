import React, { useState, useEffect } from "react";
import { 
  FiX, FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, 
  FiCode, FiCpu, FiLayers, FiStar, FiAward, FiClock, FiUsers 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  const { 
    name, 
    description, 
    keyFeatures, 
    technology, 
    images, 
    links, 
    challenges, 
    solutions,
    timeline,
    teamSize,
    achievements
  } = project;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
          animate={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
          exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl w-full ${isFullscreen ? 'fixed inset-0 m-0 rounded-none' : 'max-w-6xl'} p-6 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-gray-700`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Controls */}
            <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-transparent pt-2 pb-4 z-20 flex justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-1">{name}</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </div>
              
              <div className="flex gap-2">
                {images.length > 1 && (
                  <button
                    onClick={toggleFullscreen}
                    className="text-gray-400 hover:text-amber-400 transition-colors p-1.5 rounded-full hover:bg-gray-700"
                    aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
                  >
                    {isFullscreen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    )}
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-amber-400 transition-colors p-1.5 rounded-full hover:bg-gray-700"
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-16 z-10 bg-gradient-to-b from-gray-900 to-transparent pt-2 pb-2">
              <div className="flex space-x-1 border-b border-gray-700">
                {[
                  { id: 'overview', icon: <FiLayers size={14} />, label: 'Overview' },
                  { id: 'features', icon: <FiCpu size={14} />, label: 'Features' },
                  { id: 'challenges', icon: <FiCode size={14} />, label: 'Challenges' },
                  // { id: 'metrics', icon: <FiStar size={14} />, label: 'Metrics' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all flex items-center gap-2 ${activeTab === tab.id ? 'text-amber-400 bg-gray-800' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className={`grid ${isFullscreen ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-8 mt-4`}>
              {/* Image Gallery */}
              <div className="space-y-4">
                {images && images.length > 0 && (
                  <>
                    <div className="relative group rounded-xl overflow-hidden border border-gray-700 bg-gray-900">
                      <motion.img
                        src={images[currentImageIndex].url}
                        alt={images[currentImageIndex].alt || name}
                        className={`w-full ${isFullscreen ? 'h-[70vh]' : 'h-72'} object-contain bg-gray-900`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        key={currentImageIndex}
                      />
                      
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full hover:bg-amber-500 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                            aria-label="Previous image"
                          >
                            <FiChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full hover:bg-amber-500 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                            aria-label="Next image"
                          >
                            <FiChevronRight size={20} />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                            {currentImageIndex + 1} / {images.length}
                          </div>
                        </>
                      )}
                    </div>

                    {images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide">
                        {images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === currentImageIndex ? 'border-amber-400' : 'border-transparent hover:border-gray-500'}`}
                            aria-label={`View image ${i + 1}`}
                          >
                            <img
                              src={img.url}
                              alt={img.alt || name}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 mb-3">Project Overview</h3>
                          <p className="text-gray-300 leading-relaxed">{description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {timeline && (
                            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                              <div className="flex items-center gap-2 text-amber-400 mb-1">
                                <FiClock size={16} />
                                <span className="text-sm font-medium">Timeline</span>
                              </div>
                              <p className="text-gray-300 text-sm">{timeline}</p>
                            </div>
                          )}
                          {teamSize && (
                            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                              <div className="flex items-center gap-2 text-amber-400 mb-1">
                                <FiUsers size={16} />
                                <span className="text-sm font-medium">Team</span>
                              </div>
                              <p className="text-gray-300 text-sm">{teamSize}</p>
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 mb-3">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {technology.map((tech, i) => (
                              <motion.span
                                key={i}
                                className="px-3 py-1.5 text-xs font-medium bg-gray-800 text-amber-100 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors"
                                whileHover={{ y: -2 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'features' && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100 mb-3">Key Features</h3>
                        <ul className="space-y-3">
                          {keyFeatures.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                              whileHover={{ translateX: 2 }}
                            >
                              <span className="text-amber-400 mr-3 mt-1">
                                <FiCpu size={16} />
                              </span>
                              <span className="text-gray-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'challenges' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 mb-3">Challenges Faced</h3>
                          <ul className="space-y-3">
                            {challenges?.map((challenge, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-red-900/50"
                                whileHover={{ x: 2 }}
                              >
                                <span className="text-red-400 mr-3 mt-1">⚠️</span>
                                <span className="text-gray-300">{challenge}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {solutions && (
                          <div>
                            <h3 className="text-xl font-semibold text-gray-100 mb-3">Solutions Implemented</h3>
                            <ul className="space-y-3">
                              {solutions.map((solution, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-green-900/50"
                                  whileHover={{ x: 2 }}
                                >
                                  <span className="text-green-400 mr-3 mt-1">✅</span>
                                  <span className="text-gray-300">{solution}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'metrics' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 mb-3">Project Metrics</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {achievements?.map((achievement, i) => (
                              <motion.div
                                key={i}
                                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                                whileHover={{ y: -3 }}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="p-2 rounded-full bg-amber-500/10 text-amber-400">
                                    <FiAward size={18} />
                                  </div>
                                  <h4 className="font-medium text-gray-100">{achievement.title}</h4>
                                </div>
                                <p className="text-gray-300 text-sm">{achievement.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer with Action Buttons */}
            <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 to-transparent pt-6 pb-2 mt-6 -mb-6 -mx-6 px-6">
              <div className="flex flex-col sm:flex-row gap-3">
                {links?.project && (
                  <motion.a
                    href={links.project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 py-3 px-4 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all font-medium shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </motion.a>
                )}
                {links?.repo && (
                  <motion.a
                    href={links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 py-3 px-4 rounded-lg hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all font-medium border border-gray-700 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub size={18} />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;