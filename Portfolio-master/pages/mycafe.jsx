import Image from 'next/image';
import React from 'react';
import mycafeimg from '../public/assets/projects/mycafe.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const mycafe = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='w-screen h-[50vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={mycafeimg}
          alt='/'
        />
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h3>Project Overview</h3>
          <p class="mt-2">
            
          My café website allows users to register and log in securely, view the menu, 
          and manage their preferences with options to add items to favorites and a shopping 
          cart based on the the doctor&apos;s requirements.
          Developed using the MEAN stack (MongoDB, Express, Angular, Node.js), 
          JWT for secure user authentication and bcrypt for password encryption
          </p>
          {/* <a
            href='https://github.com/DimaHarb/Netflix-Redesign'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a> */}
          <a
            href='https://www.linkedin.com/posts/dima-harb-m_thrilled-to-share-the-demo-of-my-project-activity-7238928193653469185-ts_9?utm_source=share&utm_medium=member_desktop'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Angular
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-purple-600 font-bold'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default mycafe;
