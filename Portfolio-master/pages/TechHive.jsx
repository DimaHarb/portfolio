import Image from 'next/image';
import React from 'react';
import techhiveimg from '../public/assets/projects/techHive.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const TechHive = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='w-screen h-[50vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={techhiveimg}
          alt='TechHive E-Commerce App'
        />
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h3>Project Overview</h3>
          <p className='mt-2'>
            TechHive is an AI-powered e-commerce application designed to enhance the online shopping experience.
            Built using Java, XML, and Firebase, this Android app features AI-driven customer and admins support chatbots using OpenAI API,
            seamless product management, and personalized shopping recommendations, catering to modern retail needs.
          </p>

          <a
            href='https://www.linkedin.com/posts/dima-harb-m_ecommerceapp-androiddevelopment-chatbotai-activity-7288999870407823361-wPuu'
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
                <RiRadioButtonFill className='pr-1' /> Java
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> XML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAI API
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

export default TechHive;
