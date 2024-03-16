import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { TESTIMONIALS } from '@/constants'

const CustomerTestimonials = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-10">
      <div>
        <h2 className='text-4xl font-bold'>Customer Testimonials</h2>
        <InfiniteMovingCards items={TESTIMONIALS} direction='right' speed='normal'/>
      </div>
      
    </div>
  )
}

export default CustomerTestimonials