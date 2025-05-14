import React from 'react'
import MarqueeSection from './MarqueeSection';

function TechStack() {
    const technologies = [
        { image: 'https://cdn.simpleicons.org/html5', name: 'HTML' },
        { image: 'https://cdn.simpleicons.org/css3', name: 'CSS' },
        { image: 'https://cdn.simpleicons.org/javascript', name: 'JavaScript' },
        { image: 'https://cdn.simpleicons.org/typescript', name: 'TypeScript' },
        { image: 'https://cdn.simpleicons.org/react', name: 'ReactJS' },
        { image: 'https://cdn.simpleicons.org/nextdotjs', name: 'NextJS' },
      
        { image: 'https://cdn.simpleicons.org/tailwindcss', name: 'Tailwind CSS' },
        { image: 'https://cdn.simpleicons.org/framer', name: 'Framer Motion' },
        { image: 'https://cdn.simpleicons.org/shadcnui', name: 'Shadcn' }, 
        { image: 'https://cdn.simpleicons.org/nodedotjs', name: 'NodeJS' },
        { image: 'https://cdn.simpleicons.org/express', name: 'ExpressJS' },
      
        { image: 'https://cdn.simpleicons.org/mongodb', name: 'MongoDB' },
        { image: 'https://cdn.simpleicons.org/mysql', name: 'MySQL' },
        { image: 'https://cdn.simpleicons.org/postgresql', name: 'PostgreSQL' },
        { image: 'https://cdn.simpleicons.org/prisma', name: 'Prisma' },
        { image: 'https://cdn.simpleicons.org/zod', name: 'Zod' }, 
        { image: 'https://cdn.simpleicons.org/git', name: 'Git' },
      
        { image: 'https://cdn.simpleicons.org/github/white', name: 'GitHub' },
        { image: 'https://cdn.simpleicons.org/vercel', name: 'Vercel' },
        { image: 'https://cdn.simpleicons.org/postman', name: 'Postman' },
        { image: 'https://cdn.simpleicons.org/linux', name: 'Linux' },
        { image: 'https://cdn.simpleicons.org/npm', name: 'npm' },
      ];
      
    
  return (
    <div className='h-screen mt-20 md:mt-100'>
        <h1 className='text-4xl font-semibold text-center'>My TechStack</h1>
        <div className='flex justify-center mt-20'>
            <div className='flex gap-3 px-2 md:w-1/2 flex-wrap justify-center'>
            {technologies.map((tech,index)=>(
                <div key={index} className='bg-white/10 backdrop-blur-md rounded-xl p-2 shadow-lg border flex gap-2 border-white/30' >
                    <img className='w-6' src={tech.image} />
                    <p>{tech.name}</p>
                </div>
            ))
            }
            </div>
        </div>




        
       <MarqueeSection/>


    </div>
  )
}

export default TechStack