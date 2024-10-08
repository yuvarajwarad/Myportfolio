"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const workExperienceData = [
  {
    id: 1,
    company: "Company One",
    role: "Software Engineer",
    duration: "Jan 2021 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
  },
  {
    id: 2,
    company: "Company Two",
    role: "Frontend Developer",
    duration: "Jun 2019 - Dec 2020",
    description: "Implemented responsive web designs and optimized user interfaces.",
  },
  {
    id: 3,
    company: "Company Three",
    role: "Intern",
    duration: "Jan 2019 - May 2019",
    description: "Assisted in the development of internal tools and applications.",
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="container mx-auto px-4 md:px-0 my-12">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-6">
        Work Experience
      </h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workExperienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {experience.company}
            </h3>
            <p className="text-xl text-gray-300">{experience.role}</p>
            <p className="text-md text-gray-400 mb-4">{experience.duration}</p>
            <p className="text-md text-gray-300">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
