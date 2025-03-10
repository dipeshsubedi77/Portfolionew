import React from 'react'

const Skills = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg pt-20">
      {/* Skills Section */}
      <h2 className="text-2xl font-bold text-center">Skills</h2>
      <p className="text-gray-400 text-center mt-2">
        Developing robust backend architectures, I've focused on building engineering solutions for web and ML/AI problem domains.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-6 text-white">
        {[
          "Next.js", "React.js", "Node.js", "MongoDB", "Python", "Machine Learning",
          "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Axios",
          "Firebase", "PostgreSQL", "Express.js", "Vercel", "Netlify", "AWS",
          "Docker", "Git", "GitHub", "Jupyter Notebook", "NumPy", "Matplotlib"
        ].map(skill => (
          <span key={skill} className="bg-gray-800 text-purple-400 px-4 py-2 rounded-md text-center">
            {skill}
          </span>
        ))}
      </div>

      {/* Academic Qualifications & Certifications */}
      <h2 className="text-2xl font-bold mt-12">Academic Qualifications & Certifications</h2>
      <p className="text-gray-400 mt-2">
        I didn’t just study computer engineering, I lived it. My journey has been fueled by passion and curiosity. Learning isn’t just about degrees; it’s about staying relevant and finding smarter ways to build.
      </p>

      <div className="mt-6 space-y-6">
        {[
          {
            title: "BE Computer Engineering",
            description: "Pursuing a Computer Engineering degree with specialization in AI, Web Development, and cutting-edge technologies, aiming to bridge theory with real-world solutions.",
            year: "2020 - 2024"
          },
          {
            title: "Full Stack Developer Certification",
            description: "Completed a rigorous Full Stack Development program focusing on MERN stack technologies from XYZ Institute.",
            year: "2024"
          },
          {
            title: "AI/ML Online Learning",
            description: "Gained in-depth knowledge of Machine Learning algorithms and AI principles.",
            year: "Current"
          }
        ].map((cert, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-300 mt-2">{cert.description}</p>
            <p className="text-gray-500 mt-1">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills