import { CounterProps } from '@/types'
import React from 'react'

const CounterCard = ({ stat, description } : CounterProps) => {
  return (
    <div className='bg-gray-300 rounded-xl p-5 w-[300px] drop-shadow-md'>
        <h1 className='font-bold'>{stat}</h1>
        <p>{description}</p>
    </div>
  )
}

export default CounterCard