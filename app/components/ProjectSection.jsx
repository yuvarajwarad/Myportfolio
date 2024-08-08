"use client"
import { useState,useRef } from 'react';
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {animate, motion,useInView} from "framer-motion";
const projectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    image: "/project/portfolioIMG.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    image: "/project/portfolioIMG.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    image: "/project/portfolioIMG.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    image: "/project/portfolioIMG.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag,setTag]=useState("All");
  const ref=useRef(null);
  const isInView=useInView(ref,{once:true});

    const handleTabChange=(newTag)=>{
        setTag(newTag)
    };

    const filteredProjects=projectData.filter((project)=>
        project.tag.includes(tag)
    );
    const cardVarients={
      initial:{y:50,opacity:0},
      animate:{y:0,opacity:1},

    }
    
  return (
    <section >
    <div className="container mx-auto px-4 md:px-0">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-6">
        My Projects</h2>
        <div className='text-white flex flex-row  justify-center items-center gap-2  py-6'>
          <ProjectTag
           onClick={handleTabChange}
           name='All' isSelectd={tag==="All"}
           />
            <ProjectTag
           onClick={handleTabChange}
           name='Web' isSelectd={tag==="Web"}
           />
            <ProjectTag
           onClick={handleTabChange}
           name='Mobile' isSelectd={tag==="Mobile"}
           />

        </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project,index) => (
          <motion.li 
          key={index}
          variants={cardVarients}
           initial="initial" 
           animate={isInView?"animate":"initial"}
           transition={{duration:0.3,delay:index*0.4}}>
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default ProjectSection;
