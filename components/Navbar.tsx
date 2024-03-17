import { NAVBAR_LINKS } from '@/constants'
import { SignInButton, SignUpButton, UserButton, auth, currentUser} from "@clerk/nextjs";
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = async () => {

  const { userId } = auth()
  const user = await currentUser()

  return (
    <nav className='bg-gray-100'>
      <div className='max-container padding-container py-4 flex flexBetween'>

        <div className='flex flexCenter gap-8'>
          <Image 
            src='/BorderlineLogo.png'
            alt='Borderline Travel and Tours'
            width={120}
            height={50}
          />
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
        </div>
       
        <div className='flex gap-8 items-center'>
          
          <div className='flex gap-6 flexCenter'>
            <Button variant='destructive'>
                Book Now
              </Button>
            {
              userId || user ? (
                <UserButton afterSignOutUrl='/' />
              ) : (
                <div className='flexCenter gap-6'>
                  <Button className='btn-secondary' variant='destructive'>
                    <SignInButton />
                  </Button>
                  <Button className='btn-secondary' variant='destructive'>
                    <SignUpButton />
                  </Button>
                </div>
              )}
              
          </div>
        </div>

      </div>
    </nav>
    
  )
}

export default Navbar