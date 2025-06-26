import React from 'react'
import react from '/react.png'
import tailwindcss from '/tailwindcss.png'
import php from '/php.png'
import python from '/python.png'
import js from '/js.png'
import java from '/java.png'
import imagehero from '/imagehero.png'

const skillsData=[
    {
        id: 1,
        title: 'React',
        image: react,
        description: 'React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage the state of applications efficiently.'
    },
    {
        id: 2,
        title: 'Tailwind CSS',
        image: tailwindcss,
        description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.'
    },
    {
        id: 3,
        title: 'PHP',
        image: php,
        description: 'PHP is a popular general-purpose scripting language that is especially suited to web development. It is fast, flexible, and pragmatic.'
    },
    {
        id: 4,
        title: 'Python',
        image: python,
        description: 'Python is a high-level, interpreted programming language known for its readability and versatility, making it a popular choice for web development, data analysis, and automation.'
    },
    {
        id: 5,
        title: 'JavaScript',
        image: js,
        description: 'JavaScript is a versatile programming language primarily used for creating interactive and dynamic content on the web, enabling developers to build responsive user interfaces and handle client-side scripting.'
    },
    {
        id: 6,
        title: 'Java',
        image: java,
        description: 'Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible, making it a popular choice for building cross-platform applications.'
    },
]
const SkillBox= ({ image , title , description }) => (
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
        <figure className='flex justify-center mb-4'>
            <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold  mb-2'>{title}</h3>
        </header>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>

    </article>
)

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
        <div className="absolute z-0 w-72 h-96 sm:w-96 sm:h-44  bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>
            <img src={imagehero} alt="left picture" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70' />
            <div data-aos="fade-up" data-aos-delay='300' className="relative text-center z-20 space-y-6 sm:space-y-10 ">
            <header>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    My Experise <br /> and <span className='text-purple-400'>Skills</span>
                </h1>
                <p className='text-gray-400 mt-10 sm:mt-10 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat, eos dolor laborum sint incidunt voluptate repellendus. Harum, praesentium nostrum!
                </p>
            </header>
            <section data-aos="fade-up" data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-6 mt-15 '>
             {skillsData.map((skill) => (
                <SkillBox 
                key={skill.id} 
                image={skill.image}
                title={skill.title} 
                description={skill.description} 
                />
            ))}
            </section>
        </div>
        <img src={imagehero} alt="hight picture" className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 rotate-12 w-24 h-auto sm:w-32 opacity-70'/>
    </section>
  )
}
