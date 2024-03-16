import React from 'react'
import { GlobeDemo } from './ui/GlobeDemo'


const About = () => {
  return (
    <section className='max-container padding-container flex py-24'>
      {/* Left Side */}
      <div className='flex gap-4 flex-col w-5/12 justify-center'>
        <h2 className='font-bold text-4xl'>Connecting People Across Borders</h2>
        <p className='text-gray-400'>At Borderline Travel and Tours, we believe that every journey is an opportunity for adventure, discovery, and connection. Founded on a passion for exploration and a commitment to exceptional service, we strive to redefine the travel experience for each and every traveler. At Borderline Travel and Tours, our mission is simple: to ignite the spirit of adventure in every traveler and create moments that last a lifetime. We believe that travel has the power to transcend boundaries, broaden horizons, and foster understanding between cultures. Whether you're seeking a soul-stirring escape, an adrenaline-fueled adventure, or a cultural immersion like no other, we're here to turn your travel dreams into reality.</p>
      </div>

      {/* Right Side */}
      <div className='w-7/12'>
        <GlobeDemo />
      </div>
    </section>
  )
}

export default About