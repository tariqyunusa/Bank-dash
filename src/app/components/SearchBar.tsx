import React from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBAr = () => {
  return (
    <div className='relative flex items-center gap-4'>
        <div className='absolute text-black mr-4 px-2 text-slate-500'><CiSearch /></div>
        <input type="search" name="" id="" placeholder='Search for something' className='px-8 p-2 w-64 rounded-full focus:outline-none text-slate-500 bg-rings'/>
    </div>
  )
} 

export default SearchBAr
