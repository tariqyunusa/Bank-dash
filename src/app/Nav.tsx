import Image from 'next/image'
import React from 'react'
import Logo from "../../public/Logo.svg"
import Avatar from "../../public/pexels-christina-morillo-1181690 1.jpg"
import { CiSettings } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import SearchBAr from './components/SearchBar';

const Nav = () => {
  return (
    <nav className='w-full h-24 bg-white p-8 flex'>
        <div className='w-1/6 relative  h-full '>
            <Image fill src={Logo} alt='logo' priority/>
        </div>
        <div className='w-5/6 h-12 flex justify-between items-center'>
            <div className='w-40' ><h2 className="text-slate-600 text-2xl">Overview</h2></div>
            <div className='flex w-120 h-full gap-4'>
                <SearchBAr />
            <div className='w-12 h-12 bg-rings rounded-full flex justify-center text-settings text-xl cursor-pointer  items-center'>
                <CiSettings />
            </div>
            <div className='w-12 h-12 bg-rings rounded-full flex justify-center text-secondary text-xl cursor-pointer items-center'>
                <CiBellOn />
            </div>
            <div className='w-12 h-12 bg-rings rounded-full flex justify-center items-center relative'>
                <Image src={Avatar} alt='avatar' fill className='rounded-full'/>
            </div>
            </div>
        </div>
      
    </nav>
  )
}

export default Nav
