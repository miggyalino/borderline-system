import { NAVBAR_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-gray-100'>
      <div className='max-container padding-container py-4 flex flexBetween'>
        <Image 
          src='/BorderlineLogo.png'
          alt='Borderline Travel and Tours'
          width={120}
          height={50}
        />
        <div className='flex gap-8 items-center'>
          <div className='flex gap-10'>
            {NAVBAR_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
              >
                <p className='text-gray-500 hover:text-black'>{link.title}</p>
              </Link>
            ))}
          </div>
          <div className='flex gap-4'>
            <Button variant='destructive'>
              Book Now
            </Button>
            <Button variant='destructive'>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar