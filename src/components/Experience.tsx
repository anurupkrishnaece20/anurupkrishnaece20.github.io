import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experience } from '../data/resume';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="experience">
      <div className="max-w-5xl w-full">
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
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">Experience</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line - Hidden on mobile */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-ink-blue to-ink-brown rounded-full opacity-60 hidden sm:block" />

              <div className="space-y-8 sm:space-y-12">
                {experience.map((job, index) => (
                  <div key={`${job.organization}-${job.role}`} className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative mx-auto sm:mx-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-ink-blue flex items-center justify-center shadow-lg">
                        <Briefcase className="text-ink-blue" size={20} />
                      </div>
                      {job.current && (
                        <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 px-2 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800">
                          Current
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <div className={`polaroid p-4 sm:p-6 ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                        <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                          <div>
                            <h3 className="handwriting text-lg sm:text-xl lg:text-2xl font-bold text-ink-blue">{job.role}</h3>
                            <p className="text-base sm:text-lg font-semibold text-ink-brown">{job.organization}</p>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-pencil-gray">
                            <div className="flex items-center justify-center sm:justify-start space-x-1">
                              <Calendar size={12} />
                              <span>{job.duration}</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start space-x-1">
                              <MapPin size={12} />
                              <span>{job.location}</span>
                            </div>
                          </div>

                          <ul className="text-left list-disc list-inside space-y-1 text-xs sm:text-sm text-pencil-gray pt-1">
                            {job.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Tape decoration */}
                        <div className={`absolute ${index % 2 === 0 ? '-top-1 -right-1 sm:-top-2 sm:-right-2' : '-top-1 -left-1 sm:-top-2 sm:-left-2'} tape w-12 sm:w-16 h-6 sm:h-8 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
