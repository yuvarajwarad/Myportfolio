"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {
  return import("react-animated-numbers");
}, { ssr: false });

const Achievement = () => {
  const achievementLists = [
    {
      metric: "Project",
      value: "20",
      postfix: "+"
    },
    {
      metric: "Coding",
      value: "9",
      postfix: "+"
    },
    {
      metric: "Award",
      value: "5",
      postfix: "+"
    },
    {
      metric: "Years",
      value: "3",
      postfix: "+"
    },
  ];

  return (
    <div className='hidden lg:block py-8 px-4 sm:py-16 sm:px-8 lg:px-16'>
      <div className='border border-[#33353F] rounded-md py-8 px-4 flex flex-nowrap items-center justify-between gap-4 bg-[#1E1E1E] overflow-x-auto'>
        {achievementLists.map((achievement, index) => (
          <div key={index} className='flex flex-col items-center justify-center mx-2 min-w-[100px] sm:min-w-[120px]'>
            <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold flex items-baseline whitespace-nowrap'>
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale='en-US'
                className='text-white text-4xl font-bold'
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 50,
                    tension: 200 * (index + 1),
                  };
                }}
              />
              <span className='ml-1 text-2xl sm:text-4xl'>{achievement.postfix}</span>
            </h2>
            <p className='text-[#ADB7BE] text-sm sm:text-base'>
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
