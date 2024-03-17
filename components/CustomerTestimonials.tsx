import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { TESTIMONIALS } from '@/constants'

const CustomerTestimonials = () => {
  return (
    <div className="h-[60vh] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative gap-16 my-16 overflow-hidden">
      
      <h2 className='text-4xl font-bold mt-6'>What Our Clients Say</h2>
      
      <div className=''>
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="normal"
        />
      </div>
      
    </div>
  )
}

export default CustomerTestimonials