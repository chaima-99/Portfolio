import React from 'react'
import project1 from '/project1.jpg'
import project2 from '/project2.jpg'
import project3 from '/project3.jpg'

const ProjectCard = ({ image, title, description, link }) => (
  <article className='relative max-w-sm bg-gray-800  rounded overflow-hidden shadow-lg group'>
    <div className='absolute z-0 w-40 h-40 sm:w-60 sm-h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50-top-5 left-10'>
    </div>
    <div className='relative z-10'>
        <figure className='relative'> 
            <img src={image} alt={title} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
            <a href={link} target="_blank" rel="noopener noreferrer" className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 grpup-hover:opacity-100 transition-opacity duration-300'>
                <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover_text-white hover_bg-[#2879d5]'>Live Preview</button>
            </a>
        </figure>
        <div className='py-4 px-6'> 
            <header >
                <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
                <p className='text-gray-200 text-base'>{description}</p>
            </header>
        </div>
    </div>
    </article>
)

export default function Projects() {
    const listProjects=[
    {
    image: project1,
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    link: '#'
  },
  {
    image: project2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: '#'
  },
  {
    image: project3,
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    link: '#'
  },

    ];
  return (
    <main className='p-4'>
        <section data-aos='fade-up' data-aos-delay='300'>
            <header  className='text-center'>
                <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                    My <span className='text-purple-400'>Projects</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    Here are some of the projects I have worked on, showcasing my skills in web development and design.
                </p>
            </header>
        </section>
        <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 mt-6' >
            {listProjects.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    image={project.image} 
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                />
            ))}
        </section >
    </main>
  )
}
