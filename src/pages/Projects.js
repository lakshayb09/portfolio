import React from 'react';

const projectData = [
  {
    title: "F1 Race Analytics Platform",
    description: "Developed an interactive platform to visualize Formula 1 race data using a 2D race track simulation with real-time and historical data integration.",
    tech: "HTML/CSS, JS, FastF1 API",
    link: "https://github.com/lakshayb09/F1-Track"
  },
  {
    title: "Fake News Detection System",
    description: "Developed a hybrid NLP model using BERT and BiLSTM for accurate fake news classification.",
    tech: "NLP (BERT, BiLSTM)",
    link: "https://github.com/lakshayb09/Fake-News-Classifier-1"
  },
  {
    title: "Weather Dashboard",
    description: "Integrated Weather API and Google Maps API to fetch and display real-time weather data.",
    tech: "HTML/CSS, JS, APIs",
    link: "https://github.com/lakshayb09/AirTime-The-Personal-Pollution-Budget"
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                {project.tech}
              </span>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-indigo-600"
            >
              {/* Emojis used to bypass Lucide-React import errors */}
              <span>📂</span> Repository <span>↗️</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;