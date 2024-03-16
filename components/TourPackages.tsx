import { TOUR_PACKAGES } from '@/constants'
import React from 'react'
import { DirectionAwareHover } from './ui/direction-aware-hover'

const TourPackages = () => {
  return (
    <section className='py-16'>
      <div className='max-container padding-container flex flex-col items-center gap-8'>
        <h2 className='text-4xl font-bold'>Our Tour Packages</h2>
        <div className='grid grid-cols-3 gap-8'>
          {TOUR_PACKAGES.map((tour) => (
            <DirectionAwareHover imageUrl={tour.image}>
            <p className="font-bold text-xl">{tour.title}</p>
            <p className="font-normal text-sm">{tour.price}</p>
          </DirectionAwareHover>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default TourPackages