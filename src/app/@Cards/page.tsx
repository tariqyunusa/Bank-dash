import React from 'react'
import Cards from '../components/Cards'

const page = () => {
  const Gradient = 'bg-gradient-to-r from-ash-blue'
  return (
    <div  className='flex w-full justify-between'>
      <Cards color={"#4C49ED"} amount={"1,055"} name={"Yagami Light"} />
      <Cards color={"#ffffff"} amount={"1,055"} name={"Monkey D Luffy"} />
    </div>
  )
}

export default page
