import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { CiAlignBottom } from "react-icons/ci";
import Service from "../../public/service 1.svg"
import Privileges from "../../public/Group.svg"
import { CiSettings } from "react-icons/ci";
import { CiCoffeeBean } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';

const SideBar = () => {
  return (
    <div className='h-screen bg-white w-60 border-neutral-500'>
      <div className='flex flex-col '>
        <Link href="/" className='px-10'><div className='p-4 flex text-secondary1  items-center justify-between text-l gap-4'><CiHome /><span className='text-secondary1 justify-start flex flex-1 '>Dashboard</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiMoneyBill /><span className='text-auxilary justify-start flex flex-1'>Transactions</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiUser /><span className='text-auxilary justify-start flex flex-1'>User</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiBank /><span className='text-auxilary justify-start flex flex-1'>Investments</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary items-center justify-between text-l gap-4'><CiCreditCard1 /><span className='text-auxilary justify-start flex flex-1'>Credit Cards</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiCoffeeBean /><span className='text-auxilary justify-start flex flex-1'>Loans</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiGlobe /><span className='text-auxilary justify-start flex flex-1'>Services</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiMoneyCheck1 /><span className='text-auxilary justify-start flex flex-1'>Previleges</span></div></Link>
        <Link href="/" className='px-10'><div className='p-4 flex text-auxilary  items-center justify-between text-l gap-4'><CiSettings /><span className='text-auxilary justify-start flex flex-1'>Settings</span></div></Link>
        
      </div>
      
    </div>
  )
}

export default SideBar