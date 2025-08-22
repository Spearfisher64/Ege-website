const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile App Development",
      skills: ["React Native", "Flutter", "iOS/Android", "Firebase"]
    },
    {
      title: "Web Development",
      skills: ["React", "Tailwind CSS", "Vite", "JavaScript", "HTML/CSS"]
    },
    {
      title: "SEO & AdSense",
      skills: ["Keyword Research", "On-Page SEO", "AdSense Optimization", "Analytics"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-medium p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills