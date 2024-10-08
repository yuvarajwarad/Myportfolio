"use client"
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
const NavLinks=[

    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Work Experieance",
        path:"#WorkExperieance"
    },
    {
        title:"Contact",
        path:"#contact"
    },
  
]
const Navbar = () => {
    const [navbarOpen, setnavbarOpen]=useState(false);

  return (
    <nav className='fixed mx-auto top-0 left-0  border-[#33353F] right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex container flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2'>
         <Link href={"/"}
          className=' text-2xl md:text-5xl text-white font-semibold'>
         LOGO
         </Link>
         <div className=' mpbile-menu block md:hidden'>
         {
            !navbarOpen?(
                  <button 
                  onClick={()=>setnavbarOpen(true)} 
                    className='flex items-center px-3 py-2 rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5 '>
                    </Bars3Icon>
                    </button>
            ):(
                <button 
                onClick={()=>setnavbarOpen(false)}
                className='flex items-center px-3 py-2 rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5 '>
                    </XMarkIcon>
                    </button>
            )
         }
         </div>
         <div className='menu  hidden md:block   md:w-auto' id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                    NavLinks.map((link,index)=>(
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))
                }
            </ul>
            
            </div>   
        </div>
        {
            navbarOpen?<MenuOverlay links={NavLinks}/> : null
        }
    </nav>
  )
}

export default Navbar