import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className='bg-[#181818] rounded-xl overflow-hidden shadow-lg'>
      <div 
        className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 duration-500'>
          <Link href={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center'>
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white' />
          </Link>
          <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center'>
            <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white' />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
