import Image from 'next/image';
import React from 'react';
import paradiseimg from '../public/assets/projects/paradise.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const paradise = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='w-screen h-[50vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={paradiseimg}
          alt='/'
        />
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h3>Project Overview</h3>
          <p class="mt-2">
            
          This website is developed for a student using HTML, CSS, and JavaScript, 
          based on her university project requirements. I focused on creating a modern,
           user-friendly design that meets the specific needs of a salon business. 
           The code is carefully written making it easy to understand and learn from, 
           especially for those diving into web development.
          </p>
          
          <a
            href='https://www.linkedin.com/posts/dima-harb-m_excited-to-present-my-project-paradise-salon-activity-7238471310362701824-LtOc?utm_source=share&utm_medium=member_desktop'
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
                <RiRadioButtonFill className='pr-1' /> HTML5
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS3
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
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

export default paradise;
