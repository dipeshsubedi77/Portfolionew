import React from 'react'


const Home = () => {
  return (

    <div className="min-h-screen bg-black text-white pt-20 md:pt-40 w-full h-full">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 max-w-2xl">
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hey, I'm Dipesh <span className="text-gray-400 text-lg md:text-xl">/D-Pace/</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400">
          Welcome to my digital notebook. I'm a Computer Engineer and Fullstack Developer from Nepal. Here, I share my latest projects, insights into ML & AI, and lessons learned throughout my journey. Actively sharing knowledge with the community.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
  
      {/* Right Section: Image */}
      <div className="lg:w-1/2 mt-8 md:mt-10 lg:mt-0">
        <img
          src="https://www.pinkvilla.com/images/2022-09/zayn_malik_tattoos_1.jpg" // Replace with your image URL
          alt="Milan"
          className="rounded-lg shadow-2xl w-full max-w-xs md:max-w-none mx-auto"
        />
      </div>
    </div>
  </div>
    
  )
}

export default Home



