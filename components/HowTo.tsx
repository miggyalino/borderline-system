import Image from 'next/image';
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: "Explore Our Offerings",
    description:
      "Begin by exploring our diverse range of destinations and tour packages. Navigate through our user-friendly website to discover exotic locales, thrilling adventures, and cultural experiences that pique your interest.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Customize Your Experience",
    description:
      "Tailor your trip to your preferences with our customizable options. Select your desired activities, accommodations, and add-ons to create a personalized itinerary that reflects your unique interests and budget.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Consult with Our Experts",
    description:
      "Have questions or need assistance? Reach out to our team of experienced travel experts for personalized guidance and recommendations. Whether it's destination insights, itinerary adjustments, or travel tips, we're here to help every step of the way.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Book Hassle-Free",
    description:
      "Ready to book your dream getaway? With our easy-to-use booking platform, securing your travel plans is quick and convenient. Simply follow the prompts to reserve your spot, make secure payments, and receive instant confirmation—all with peace of mind.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const HowTo = () => {
  return (
    <div className=''>
      <StickyScroll content={content} />
    </div>
  )
}

export default HowTo