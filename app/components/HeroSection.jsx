"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className='flex flex-col justify-center text-center md:text-left'
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
              Hello, I'm {" "}
            </span>
            <br />
            <div style={{ height: '2.5em', display: 'inline-block', overflow: 'hidden' }}>
              <TypeAnimation
                sequence={[
                  'Yuvraj',
                  1000,
                  'Web Developer',
                  1000,
                  'Mobile Developer',
                  1000,
                  'UI/UX Designer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block', lineHeight: '2.5em' }}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Hello, I am Yuvraj from Solapur currently working in Star Health Organisation.
          </p>
          <div className='flex flex-col md:flex-row items-center md:items-start'>
            <button className='px-6 py-3 w-full md:w-auto rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button>
            <button className='px-1 py-1 w-full md:w-auto rounded-full mt-3 md:mt-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative overflow-hidden'>
            <Image
              src="/images/yuvraj-img.webp"
              alt="hero image"
              className='absolute inset-0 w-full h-full object-cover'
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
