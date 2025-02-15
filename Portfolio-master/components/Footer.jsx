import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/navLogo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center bg-purple-300 text-gray-500 px-4 md:px-20 pb-4 md:pb-0'>
      <div className='mb-4 md:mb-0'>
        <div className='w-40 md:w-40 mx-auto p-6'>
        <Link href='/'>
          <Image src={logo} alt="footer pic" layout="responsive" />
          </Link>
        </div>
      </div>
      
      <div className='flex gap-4 md:gap-10 justify-center md:justify-start'>
        <a
          href='https://www.facebook.com/dima.harb.92?mibextid=ZbWKwL'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook />
        </a>
        <a
          href='https://www.instagram.com/_dima_harb_/'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.linkedin.com/in/dima-harb-m/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/DimaHarb'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
