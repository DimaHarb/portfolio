import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactImg from '../public/assets/contact.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center pt-24'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 pb-[15rem]'>
        <div className='col-span-2'>
          <p className='uppercase text-2xl tracking-widest font-bold text-[#b148d2]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-800'>
            I am a highly skilled and dedicated full-stack web developer based in Beirut, Lebanon. With a passion for creating responsive and visually appealing web applications, I bring extensive knowledge and experience in the MERN stack, MEAN stack, and AGILE development methodologies.
          </p>
          <p className='py-2 text-gray-800'>
            Throughout my professional journey, I have demonstrated expertise in various frontend technologies, including Angular, React.js, HTML5, CSS, and JavaScript. I have also excelled in backend development, utilizing PHP, Express.js, Node.js, MongoDB, and MySQL. My proficiency extends to other programming languages, showcasing my versatility and adaptability across different technological landscapes.
          </p>
          <p className='py-2 text-gray-800'>
          Beyond my technical prowess, I hold a Bachelor&apos;s and Master&apos;s degree in Management Information Systems from
           the Lebanese University. Fluent in Arabic, English, and French, I possess excellent communication skills,
            enabling me to collaborate effectively with cross-functional teams and clients from diverse backgrounds.



          </p>
          <Link href='/#projects'>
            <p className='py-2 text-purple-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ContactImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
