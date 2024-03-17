import React from 'react'
import Chip from '../../../public/Chip_Card.svg'
import { RiMastercardFill } from 'react-icons/ri'
import Image from 'next/image'

const Cards = ({color, amount, name} : any) => {   
  return (
    <div className={`w-80 h-56 bg-primaryCard rounded-lg flex flex-col text-white p-4 gap-6 `}>
      <div className='w-full flex justify-between  '>
       <div className='flex gap-1 flex-col '>
       <p className='text-base'>Balance</p>
        <span className='text-base'>${amount}</span>
       </div>
       <div className=''><Image src={Chip} alt='chip' width={35} height={35}/></div>
      </div>
      <div className='w-4/5 flex justify-between'>
        <div className='flex flex-col'>
          <h4 className='text-sm'>Card Holder</h4>
          <span className='text-base'>{name}</span>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-sm'>Valid Thru</h4>
          <span className='text-base'>12/22</span>
        </div>
      </div>
      <div className='h-16 w-full flex justify-between  border-y-white text-base mb-0  align-text-bottom'>
       <h4 className='text-xl'>37778*****1234</h4>
      <div className='text-4xl'><RiMastercardFill/></div>
      </div>

    </div>
  )
}

export default Cards
