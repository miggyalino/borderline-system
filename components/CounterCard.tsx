import { CounterProps } from '@/types'
import React from 'react'

const CounterCard = ({ stat, description } : CounterProps) => {
  return (
    <div className='bg-white rounded-xl p-5 w-[300px] drop-shadow-lg'>
        <h1 className='font-bold'>{stat}</h1>
        <p className='text-red-600 font-bold'>{description}</p>
    </div>
  )
}

export default CounterCard