import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

const resume = () => {
  return (
    <>
      <Head>
        <title>Dima | Resume</title>
        <meta
          name='description'
          content='I’m a full-stack web developer specializing in building responsive and scalable web applications.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-purple-300 my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center name'>Dima Harb</h2>

          <div className='flex'>

            <a
              href='tel:+96178826461'
              target='_blank'
              rel='noreferrer'
            >
              <FaPhone size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='mailto:dimaharb01@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaEnvelope size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://www.linkedin.com/in/dima-harb-m/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/DimaHarb'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <h5 className='text-center underline text-[18px] py-2'>Profile</h5>

          </div>
          <div className='block sm:hidden'>
            <h5 className='text-center underline text-[18px] py-2'>Profile</h5>
          </div>
        </div>
        <p>
          Full stack web developer with experience in building responsive and scalable web applications
          using the MERN stack, MEAN stack and AGILE development methodologies. Proficient in HTML,
          CSS, JavaScript, ReactJS, Angular, PHP, MySQL, NodeJS, ExpressJS and MongoDB.
          Strong understanding of web development principles and a passion for creating user-friendly
          and visually appealing websites.  
        </p>

        {/* Skills */}
        <div className=' py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Front-End:</span> 
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> TailwindCSS
            <span className='px-2'>|</span> MaterialUI
            <span className='px-2'>|</span> Bootstrap
            <span className='px-2'>|</span> JavaScript
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span> ReactJS
            <span className='px-2'>|</span> Angular
            <br />
            <span className='font-bold'>Back-End:</span>
            <span className='px-2'></span> NodeJS
            <span className='px-2'>|</span> ExpressJS
            <span className='px-2'>|</span> MongoDB
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Java
            <span className='px-2'>|</span> MySQL
            <span className='px-2'>|</span> PHP
            <span className='px-2'>|</span> SQLite
            <span className='px-2'>|</span> Python
            <br />
            <span className='font-bold'>Other Skills:</span>
            <span className='px-2'></span> Git
            <span className='px-2'>|</span> GitHub
            <span className='px-2'>|</span> Docker
            <span className='px-2'>|</span> Android Studio
            <span className='px-2'>|</span> ClickUp
          </p>
        </div>


        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Technoline Technology</span>
            <span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-1 italic'> Full Stack Developer <span className='px-2'>|</span>January - Current</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              <span class="font-bold">Developing and Maintaining Angular Applications: </span>Wrote clean, maintainable, and efficient code to build new features, enhance existing functionalities, and fix bugs in Angular-based web applications.
            </li>
            <li>
            <span class="font-bold">Creating an Import Data Tool Using Python: </span>Developed a custom tool using <code>pandas</code> and <code>pyodbc</code> libraries to import CSV data and access data from Microsoft Access databases, then store and manage it in ArangoDB.
            </li>
            <li>
            <span class="font-bold">Utilizing Docker, VirtualBox, and Portainer for Development Environments: </span>Leveraged Docker for containerization, VirtualBox for setting up isolated virtual environments, and Portainer for managing Docker containers across multiple projects.
            </li>
            <li>
            <span class="font-bold">Code Reviews and Best Practices: </span>Participated in code reviews to ensure code quality, consistency, and adherence to industry best practices, while also providing constructive feedback to team members.
            </li>
            <li>
            <span class="font-bold">Integration with RESTful APIs: </span>Collaborated with back-end developers to integrate Angular applications with RESTful APIs, ensuring seamless data flow and synchronization between front-end and back-end systems.
            </li>
            <li>
            <span class="font-bold">Agile Development Methodologies: </span>Actively participated in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives, to ensure the timely delivery of high-quality features.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Development of Senior Project for Students</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              <span className='font-bold'>Full Project Development for Students:</span> Provided comprehensive development services for students struggling with their capstone projects. Built complete web applications from the ground up using HTML, CSS, JavaScript, PHP, and MySQL.
            </li>
            <li>
              <span className='font-bold'>Front-End Creation:</span> Designed and developed user-friendly, responsive interfaces by coding HTML, CSS, and JavaScript, ensuring the project met both academic and functional requirements.
            </li>
            <li>
              <span className='font-bold'>Debugging and Testing:</span> Conducted thorough testing and debugging to ensure the final project was error-free and fully operational before submission.
            </li>
            <li>
              <span className='font-bold'>Documentation and Delivery:</span> Prepared detailed documentation for the projects, including user manuals and deployment instructions, to assist students in presenting their projects successfully.
            </li>
          </ul>
        </div>

        <div className='py-6'>
        <h5 className='text-center underline text-[18px] py-4'>
            Bootcamp
          </h5>
          <p className='italic'>
            <span className='font-bold italic'>ESA Coding Lab</span>
            <span className='px-2'>|</span>Nabatye, Lebanon
          </p>
          <p className='py-1 italic'> Full Stack Developer <span className='px-2'>|</span>April 2023 - August 2023</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              <span className='font-bold'>HTML, CSS, JavaScript, Bootstrap, SQL, and PHP (First 2 Months):</span> Learned front-end and back-end basics, culminating in the development of a Library Management System using PHP and MySQL.
            </li>
            <li>
              <span className='font-bold'>MERN Stack (Next 2 Months):</span> Learned MongoDB, Express, React, and Node.js, and developed a Tasks Management System for teams.
            </li>
            <li>
              <span className='font-bold'>Final Project (Last Month):</span> Built a comprehensive e-Commerce website using the MERN stack, featuring product listings, shopping cart functionality, and Stripe payment integration.
            </li>
          </ul>
        </div>


        {/* Education */}
        <div className='py-6'>
          <h5 className='text-center underline text-[18px] py-4'>
            Education
          </h5>
          <p className='py-2'>
            <span className='font-bold'>Lebanese University</span>
            <span className='px-2'>|</span>BA in Management Information System<span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-2'>
            <span className='font-bold'>Lebanese University</span>
            <span className='px-2'>|</span>MA in Management Information System<span className='px-2'>|</span>Beirut, Lebanon
          </p>
        </div>

        {/* Languages */}
        <div className='py-6'>
          <h5 className='text-center underline text-[18px] py-4'>
            Languages
          </h5>
          <p className='py-2'>
            Arabic English and French
          </p>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default resume;
