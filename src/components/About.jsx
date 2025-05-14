import React from 'react'

function About() {
  return (
    <div className="about  w-full mt-10 md:mt-40">
    
    <div className='about__heading text-center text-3xl md:text-5xl md:my-20'>About me</div>
    <div className="md:flex mt-2">



        <div className="md:flex md:justify-center">

    <div className="about__details w-full md:w-1/2 p-4 md:p-10">
        <h1 className='text-2xl md:text-5xl font-semibold'>Full-Stack Developer</h1>
        <p className='text-md md:text-lg my-5 text-gray-400 leading-snug tracking-wider md:pr-20'>Hi, I'm <strong>Indrajit Ghosh</strong>, a passionate <strong>Full Stack Developer </strong> with a strong foundation in both frontend and backend technologies. I enjoy building clean, efficient, and user-focused web applications. From creating responsive UIs to designing scalable backend systems, I strive to deliver seamless digital experiences. I love learning new tools, exploring modern frameworks, and staying up-to-date with the latest in web development. Whether it's React, Node.js, or databases, I’m always eager to dive in and create impactful solutions. I'm currently seeking exciting opportunities to grow, collaborate, and contribute to innovative tech-driven teams.
        </p>
        <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
    </span>
    <span class="relative text-white">More About me</span>
</a>
    </div>
    <div className="about__photo w-full md:w-auto my-5">
        <div className="mx-4">
    <img src="/profile.jpg" alt="profile Photo" className=' md:w-100 md:h-100 rounded-2xl md:rounded-full ' />
    </div>
    </div>




    </div>
    </div>
    </div>
  )
}

export default About