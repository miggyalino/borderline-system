import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { TESTIMONIALS } from '@/constants'

const CustomerTestimonials = () => {
  return (
    <div className="h-[60vh] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-16 my-16">
      
      <h2 className='text-4xl font-bold'>What Our Clients Say</h2>
      
      <InfiniteMovingCards
        items={TESTIMONIALS}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

export default CustomerTestimonials