import React from 'react'

const About = () => {
  return (

    <div className='min-h-screen bg-black text-white pt-30'>

       
    <div className="max-w-2xl mx-auto p-6 text-white rounded-lg shadow-lg">
    <p className='text-2xl'>About Me😒</p>
    <div className="text-center">
      <img
        src="https://www.pinkvilla.com/images/2022-09/zayn_malik_tattoos_1.jpg" // Replace with your profile image path
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold mt-4">Dipesh Subedi</h2>
      <p className="text-gray-400">Full Stack Developer</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="bg-gray-700 p-2 rounded-md hover:bg-gray-600">
          GitHub
        </a>
        <a href="#" className="bg-red-600 p-2 rounded-md hover:bg-red-500">
          YouTube
        </a>
        <a href="#" className="bg-blue-700 p-2 rounded-md hover:bg-blue-600">
          LinkedIn
        </a>
      </div>
    </div>

    <p className="mt-6 text-gray-300">
      I am a dedicated Full Stack Developer with a passion for creating
      user-friendly and innovative web solutions. I love exploring new
      technologies and sharing my knowledge.
    </p>

    <h3 className="text-xl font-semibold mt-6">My Mission</h3>
    <ul className="list-disc list-inside text-gray-300">
      <li>Inspire and educate through projects and insights.</li>
      <li>Showcase professional work and creative endeavors.</li>
      <li>Foster collaboration with like-minded individuals.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">My Vision</h3>
    <p className="text-gray-300">
      I aim to create a knowledge-sharing community where creativity and
      learning flourish to help individuals in their professional growth.
    </p>

    <h3 className="text-xl font-semibold mt-6">What I Offer</h3>
    <ul className="list-disc list-inside text-gray-300">
      <li>Curated portfolio of projects and insights.</li>
      <li>Technical articles, tutorials, and industry trends.</li>
      <li>Opportunities for collaboration and networking.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">Why Choose Me?</h3>
    <p className="text-gray-300">
      I provide a unique perspective rooted in experience, a welcoming space
      for discussions, and a commitment to excellence in web development.
    </p>

    <h3 className="text-xl font-semibold mt-6">Contact Me</h3>
    <p className="text-gray-300">Location: Kathmandu, Nepal</p>
    <p className="text-gray-300">Email: dipeshfitness74@gmail.com</p>

    <div className="mt-6 text-center">
      <a
        href="mailto:milanghimireinfo@gmail.com"
        className="bg-blue-600 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-500"
      >
        Get in Touch
      </a>
    </div>
  </div>
  </div>
  )
}

export default About