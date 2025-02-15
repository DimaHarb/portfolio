import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mycafeimg from '../public/assets/projects/mycafe.png';
import Paradiseimg from '../public/assets/projects/paradise.png';
import portfolioimg from '../public/assets/projects/portfolioimg.png';
import techhive from '../public/assets/projects/techHive.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-[5rem]'>
      <div className='max-w-[1240px] mx-auto px-2 py-18'>
        <p className='text-2xl font-bold tracking-widest uppercase text-[#b148d2]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='TechHive'
            backgroundImg={techhive}
            projectUrl='/TechHive'
            tech='java, XML, Firebase, OpenAI API'

          />
        <ProjectItem
            title='Portfolio'
            backgroundImg={portfolioimg}
            projectUrl='/portfolio'
            tech='Next JS'
          />
        <ProjectItem
            title='My Cafe'
            backgroundImg={mycafeimg}
            projectUrl='/mycafe'
            tech='React JS'
          />

          <ProjectItem
            title='PARADISE'
            backgroundImg={Paradiseimg}
            projectUrl='/paradise'
            tech='html, css, js'

          />
          
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
