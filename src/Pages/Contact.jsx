import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
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

  const formVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-500 mx-auto"></motion.div>
          <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-gray-300">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you. Fill out the form or use one of the contact 
            methods below.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
            className="bg-gray-800 p-8 rounded-xl shadow-2xl transition-all hover:shadow-blue-500/10"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows="5"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={infoVariants}
            className="space-y-8"
          >
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl h-full">
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">Contact Information</h3>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-6"
              >
                <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-all">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a 
                      href="mailto:Akashahamed909087@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      Akashahamed909087@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-all">
                    <FaPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <a 
                      href="tel:01733596607" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      +880 1733 596607
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-all">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-gray-300">Gaibandha Sadar, Bangladesh</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {[
                    {icon: FaLinkedinIn, color: "hover:bg-blue-600", url: "#"},
                    {icon: FaGithub, color: "hover:bg-gray-700", url: "#"},
                    {icon: FaTwitter, color: "hover:bg-blue-400", url: "#"},
                    {icon: FaFacebookF, color: "hover:bg-blue-800", url: "#"},
                    {icon: FaInstagram, color: "hover:bg-pink-600", url: "#"}
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      href={social.url}
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white ${social.color} transition-all`}
                      aria-label={social.icon.displayName}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;