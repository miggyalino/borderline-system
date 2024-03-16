import React from 'react'
import { Button } from './ui/button'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/TypewriterEffect'
import { COUNTER_CARDS, HERO_WORDS } from '@/constants'
import Counter from './Counter'

const Hero = () => {
  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-bg-img-1 z-10' />
        {/* Left Side Section */}
        <section className='padding-container max-container flexBetween z-30'>
            <div className='flex flex-col w-1/2 justify-center h-screen gap-4 z-30'>

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

            {/* Right Side Section */}
            <div className='w-1/2 '>

            </div>

        </section>

        {/* Counter Section */}
        <div className='padding-container max-container absolute bottom-20 left-80 z-30'>
            <Counter />
        </div>
    </div>
  )
}

export default Hero