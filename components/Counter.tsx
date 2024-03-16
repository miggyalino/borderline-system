import { COUNTER_CARDS } from '@/constants'
import React from 'react'
import CounterCard from './CounterCard'

const Counter = () => {
  return (
    <div className='flex justify-center gap-32'>
        {COUNTER_CARDS.map((card) => (
            <CounterCard stat={card.stat} description={card.description}/>
        ))}
    </div>
  )
}

export default Counter