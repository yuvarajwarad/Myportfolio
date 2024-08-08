"use client";

import { useTransition, useState } from 'react';
import TabButton from './TabButton';
import React from 'react';
import Image from 'next/image';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    Content: (
      <ul className='list-disc pl-5'>
        <li>C/C++</li>
        <li>Data Structure</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>SQL</li>
        <li>Node.js</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "Education",
    Content: (
      <ul className='list-disc pl-5'>
        <li>Pune Vidhyarthi Griha&apos;s College of Engineering and Technology Pune - 8.1 CGPA</li>
        <li>Diploma in S.V.S.M.D&apos;s Polytechnic Akkalkot - 89.12%</li>
        <li>10th in Shree Siddarameshwar High School Tolnur - 69.80%</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "Certification",
    Content: (
      <ul className='list-disc pl-5'>
        <li>Savitribai Phule Pune University</li>
        <li>C/C++</li>
        <li>IIT Bombay Internship</li>
        <li>Data Structure</li>
      </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='relative w-full h-96 md:h-full'>
          <Image
            src="/images/ForaboutSection.jpg"
            layout="fill"
            objectFit="cover"
            alt="About Me Image"
          />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
            Hi, I&apos;m Yuvraj, a passionate Front-End Web Developer with expertise in Next.js and React. 
            I craft dynamic and responsive web applications using HTML, CSS, and JavaScript. 
            My background in C &amp; C++, Data Structures, and SQL enhances my problem-solving skills,
            allowing me to develop complex front-end solutions and optimize backend performance.
            Explore my portfolio to see how I blend creativity with technical expertise to deliver exceptional web experiences.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Education')} active={tab === 'Education'}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Certification')} active={tab === 'Certification'}>
              Certification
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).Content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
