import React from 'react';
const projects = [
  {
    title: "One Minute Resume",
    description: "Build a professional resume with our free builder",
    points: [
      "I use React.js to build fast, interactive web apps.",
    "Tailwind CSS helps me style with speed and flexibility.",
   " React ensures efficient UI rendering and state management.",
    "Tailwind keeps designs clean, responsive, and consistent."
    ],
    tags: [
        { image: 'https://cdn.simpleicons.org/html5', name: 'HTML' },
        { image: 'https://cdn.simpleicons.org/tailwindcss', name: 'Tailwind' },
        { image: 'https://cdn.simpleicons.org/javascript', name: 'JavaScript' },
        { image: 'https://cdn.simpleicons.org/react', name: 'ReactJS' },
    ],
    image: "/resume.png",
  },
  {
    title: "ShopSphere",
    description: "A modern e-commerce platform built with the MERN stack.",
    points: ["Secure Auth with JWT ", "sleek dashboard for admins & users."],
    tags: [  
          { image: 'https://cdn.simpleicons.org/react', name: 'React' },
        { image: 'https://cdn.simpleicons.org/mongodb', name: 'MongoDB' },
        { image: 'https://cdn.simpleicons.org/express', name: 'ExpressJS' },
        { image: 'https://cdn.simpleicons.org/nodedotjs', name: 'NodeJS' },
        { image: 'https://cdn.simpleicons.org/redux', name: 'Redux' },
    ],
    image: "/ecom.png",
  }
];

const Projects = () => {
  

  return (
   <div>
     <div className=' text-center font-semibold italic text-3xl md:text-5xl my-10 md:my-20'>Curated <span className='about__heading font-light not-italic'>work</span></div>
     <div className="projects mb-50 md:mb-100">
        <div className="project mx-4 flex flex-col gap-10 md:gap-50 items-center  ">
            {
                projects.map((proj,index)=>(
                    <div key={index} className='md:flex w-full md:w-[70vw] gap-10 md:h-[500px] md:sticky top-40 '>
                    <div className="project__image w-full h-[250px] md:h-[500px] md:w-1/2 border-white/15 shadow-xl bg-white/10 backdrop-blur-lg p-3 rounded-2xl">
                        <div className="image rounded-2xl bg-blue-600 w-full h-full flex flex-col items-center justify-center md:justify-between overflow-hidden"
                        style={{background: "linear-gradient(to right, #004e92, #000428)" }}
                        >
                            <div className='hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-blue-300'>
                            <p className='max-w-[90%] text-2xl'>{proj.description}</p>
                            </div>
                            <img src={proj.image} className='w-full transition hover:scale-[1.08] -tanslate-y-10  hover:-rotate-6  delay-150 duration-300 ease-in-out rounded-2xl'/>
                        </div>
                    </div>
                    <div className="project__info bg-black w-full md:w-1/2 p-4">
                        <div className="title text-2xl font-bold my-4">{proj.title}</div>
                        <div className="description text-muted-foreground my-2 text-base font-light">{proj.description}</div>
                        <div className="points text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">{proj.points.map((point,index)=>(
                            <ul>
                                <li className='flex'>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="mt-1 mr-2 size-5 shrink-0 fill-blue-600 text-blue-400 bg-blue-600/20 lg:bg-black"><path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path></svg>
                                    {point}</li>
                            </ul>
                        ))}</div>
                        <div className="tags flex flex-wrap gap-2 mt-5">
                        {proj.tags.map((tag,index)=>(
                            <div className='bg-white/10 backdrop-blur-md rounded-xl p-2 shadow-lg border flex gap-2 border-white/30'>
                                <img src={tag.image} className='w-4' />
                              <p className='text-sm'>{tag.name}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
     </div>
   </div>
  );
};

export default Projects;
