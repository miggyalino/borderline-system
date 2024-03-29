import { TOUR_IMAGES, TOUR_PACKAGES } from '@/constants'
import React from 'react'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { ParallaxScroll } from './ui/parallax-scroll'
import { Button } from './ui/button'

const TourPackages = () => {
  return (
    <section className='border-2 border-dotted'>
      
      <div className='max-container padding-container flex gap-8'>

        

        <div className='flex flex-col justify-center gap-4'>
          <h2 className='text-4xl font-bold '>Our Tour Packages</h2>
          <p className='font-medium max-w-xl'>Embark on unforgettable journeys tailored just for you and your group with our curated tour packages. Explore breathtaking landscapes, immerse yourself in vibrant cultures, and create lifelong memories with our expertly crafted itineraries.</p>
          <div className='flex gap-4'>
            <Button variant='destructive'>
              Learn More
            </Button>
          </div>

          
        </div>
        <div className='w-2/3'>
          <ParallaxScroll images={TOUR_IMAGES}/>
          </div>
        
        
      </div>
      
    </section>
  )
}

export default TourPackages