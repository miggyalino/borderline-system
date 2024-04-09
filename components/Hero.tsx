import React from 'react'
import { Button } from './ui/button'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/TypewriterEffect'
import { COUNTER_CARDS, HERO_WORDS } from '@/constants'

const Hero = () => {
  return (
    <div className='relative bg-black'>
        {/* Left Side Section */}
        <section className='padding-container max-container flexBetween z-30'>

            <div className='absolute inset-0 h-[500px] z-10' />
            <div className='flex flex-col justify-center h-[500px] gap-4 z-30'>

                <h2 className='text-2xl text-white font-bold'>
                    Discover. Explore. Wander.
                </h2>
                <h1 className='flex text-white text-4xl font-bold items-center'>
                    <TypewriterEffectSmooth words={HERO_WORDS} />
                </h1>
                <p className='text-gray-300'>
                    At Borderline Travel and Tours, we don't just plan trips; we craft experiences that linger in your memories forever. From pristine beaches to bustling cities, immerse yourself in the beauty of diverse cultures and breathtaking landscapes.
                </p>
                <div className='flex gap-4'>
                    <Button variant='destructive'>Book Now</Button>
                    <Button variant='destructive'>Sign Up</Button>
                </div>

            </div>
        
        </section>

    </div>
  )
}

export default Hero