import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/resume';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="projects">
      <div className="max-w-6xl w-full">
        <div className="page-flip aged-paper rounded-lg p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-amber-200 relative">
          {/* Notebook Holes - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 hidden sm:flex flex-col justify-evenly">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
            ))}
          </div>

          {/* Margin Line - Hidden on mobile */}
          <div className="absolute left-12 sm:left-20 top-0 bottom-0 w-0.5 bg-red-300 opacity-50 hidden sm:block" />

          <div className="sm:ml-16 space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="relative text-center sm:text-left">
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">Projects</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>

            <p className="handwriting text-lg sm:text-xl lg:text-2xl text-ink-brown text-center sm:text-left">AI systems, agents, and applied research</p>

            {/* Projects Grid */}
            <div className="space-y-8 sm:space-y-12">
              {projects.map((project, index) => (
                <div key={project.title} className="relative">
                  <div className={`polaroid p-4 sm:p-6 lg:p-8 ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                      {/* Project Visual */}
                      <div className="relative order-2 lg:order-1">
                        <div className="w-full h-32 sm:h-40 lg:h-48 rounded bg-gradient-to-br from-ink-blue to-blue-600 flex items-center justify-center">
                          <Sparkles className="text-white opacity-80" size={48} />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-200 text-green-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                          {project.status}
                        </div>

                        {/* Type Badge */}
                        <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 bg-blue-200 text-blue-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                          {project.type}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                        <div>
                          <h3 className="handwriting text-xl sm:text-2xl lg:text-3xl font-bold text-ink-blue mb-2">{project.title}</h3>
                          <p className="text-sm sm:text-base text-pencil-gray leading-relaxed">{project.description}</p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="handwriting text-base sm:text-lg font-semibold text-ink-brown mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className={`px-2 py-1 rounded text-xs font-medium ${
                                  techIndex % 4 === 0 ? 'bg-purple-200 text-purple-800' :
                                  techIndex % 4 === 1 ? 'bg-green-200 text-green-800' :
                                  techIndex % 4 === 2 ? 'bg-blue-200 text-blue-800' :
                                  'bg-orange-200 text-orange-800'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="handwriting text-base sm:text-lg font-semibold text-ink-brown mb-2">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                            {project.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2 text-xs sm:text-sm text-pencil-gray">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ink-blue rounded-full flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons — hidden until real links are added to src/data/resume.ts */}
                        {(project.githubUrl || project.liveUrl) && (
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-3 sm:pt-4">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 bg-ink-blue text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                              >
                                <Github size={14} />
                                <span>Code</span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm"
                              >
                                <ExternalLink size={14} />
                                <span>Live Demo</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute ${index % 2 === 0 ? '-top-2 -right-2 sm:-top-3 sm:-right-3' : '-top-2 -left-2 sm:-top-3 sm:-left-3'} tape w-12 sm:w-16 lg:w-20 h-6 sm:h-8 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
