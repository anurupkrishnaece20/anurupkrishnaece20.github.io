import React from 'react';
import { Target, Lightbulb, Code } from 'lucide-react';
import { summary } from '../data/resume';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="about">
      <div className="max-w-4xl w-full">
        <div className="page-flip aged-paper rounded-lg p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-amber-200 relative">
          {/* Notebook Holes - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 hidden sm:flex flex-col justify-evenly">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
            ))}
          </div>

          {/* Margin Line - Hidden on mobile */}
          <div className="absolute left-12 sm:left-20 top-0 bottom-0 w-0.5 bg-red-300 opacity-50 hidden sm:block" />

          {/* Page Header */}
          <div className="sm:ml-16 space-y-6 sm:space-y-8">
            <div className="relative text-center sm:text-left">
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">About Me</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Main Story */}
              <div className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <p className="text-base sm:text-lg leading-relaxed text-pencil-gray">
                    I'm an <span className="handwriting text-lg sm:text-xl text-ink-blue font-semibold">AI/ML Engineer</span> with
                    production-facing experience building
                    <span className="bg-yellow-200 px-1 rounded"> LLM-based systems</span>,
                    <span className="bg-blue-200 px-1 rounded"> RAG pipelines</span>, and
                    <span className="bg-green-200 px-1 rounded"> agentic workflows</span>.
                  </p>

                  <div className="absolute -right-2 sm:-right-4 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-pink-200 rounded-full opacity-50" />
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-pencil-gray">
                  {summary}
                </p>

                {/* Skills Overview */}
                <div className="pencil-sketch p-3 sm:p-4 bg-white bg-opacity-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Code className="text-ink-blue" size={18} />
                    <span className="font-medium text-ink-blue">Technical Foundation</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-pencil-gray">
                    <li>End-to-end ML pipelines in Python</li>
                    <li>RAG, embeddings, and vector retrieval</li>
                    <li>Evaluation and observability tooling</li>
                    <li>Cloud deployment (AWS, Azure)</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Values and Goals */}
              <div className="space-y-4 sm:space-y-6">
                <div className="pencil-sketch p-3 sm:p-4 bg-white bg-opacity-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Target className="text-red-500" size={18} />
                    <span className="font-medium text-ink-blue">What I Focus On</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-pencil-gray">
                    <li>Shipping production-grade LLM systems</li>
                    <li>Designing evaluation & benchmarking frameworks</li>
                    <li>Translating ambiguous requirements into deployed systems</li>
                    <li>Presenting technical results to stakeholders</li>
                  </ul>
                </div>

                <div className="pencil-sketch p-3 sm:p-4 bg-white bg-opacity-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Lightbulb className="text-yellow-500" size={18} />
                    <span className="font-medium text-ink-blue">Background</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-pencil-gray">
                    <li>M.S. Electrical & Computer Engineering, University of Michigan</li>
                    <li>B.Tech Electronics Engineering, IIT (BHU) Varanasi</li>
                    <li>Co-authored two peer-reviewed publications on EV battery health</li>
                    <li>Research experience spanning ML, DSP, and accessible technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
