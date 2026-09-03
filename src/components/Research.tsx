import React from 'react';
import { FlaskConical, Calendar, MapPin, BookOpen, ExternalLink } from 'lucide-react';
import { researchProject, publications } from '../data/resume';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="research">
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
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">Research & Publications</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>

            {/* Research Project */}
            <div className="polaroid p-4 sm:p-6 lg:p-8 transform rotate-1 relative">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ink-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="handwriting text-xl sm:text-2xl lg:text-3xl font-bold text-ink-blue">{researchProject.title}</h3>
                  <p className="text-sm sm:text-base font-semibold text-ink-brown">{researchProject.role}, {researchProject.organization}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-pencil-gray mb-3 sm:mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{researchProject.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>{researchProject.location}</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-pencil-gray">
                {researchProject.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 tape w-12 sm:w-16 lg:w-20 h-6 sm:h-8 transform rotate-12" />
            </div>

            {/* Publications */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="handwriting text-xl sm:text-2xl lg:text-3xl font-bold text-ink-blue">Publications</h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {publications.map((pub, index) => (
                  <div
                    key={pub.title}
                    className={`polaroid p-4 sm:p-6 ${index % 2 === 0 ? 'transform -rotate-1' : 'transform rotate-1'}`}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <BookOpen className="text-ink-blue flex-shrink-0 mt-1" size={18} />
                      <p className="text-sm sm:text-base font-semibold text-ink-blue leading-snug">{pub.title}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-pencil-gray mb-1">{pub.authors}</p>
                    <p className="text-xs sm:text-sm text-ink-brown italic mb-2">{pub.venue} ({pub.year})</p>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs sm:text-sm text-ink-blue hover:underline"
                      >
                        <ExternalLink size={12} />
                        <span>View publication</span>
                      </a>
                    )}
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

export default Research;
