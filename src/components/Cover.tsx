import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles, Mail, Linkedin, Github, Phone } from 'lucide-react';
import { personalInfo } from '../data/resume';

interface CoverProps {
  onNavigate: (section: string) => void;
}

const Cover: React.FC<CoverProps> = ({ onNavigate }) => {
  const [signatureVisible, setSignatureVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSignatureVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Links with an empty href (see src/data/resume.ts) are hidden automatically.
  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'text-red-600 hover:text-red-700',
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedinUrl,
      label: 'LinkedIn',
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Github,
      href: personalInfo.githubUrl,
      label: 'GitHub',
      color: 'text-gray-800 hover:text-gray-900',
    },
    {
      icon: Phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      label: 'Phone',
      color: 'text-green-600 hover:text-green-700',
    },
  ].filter((social) => social.href);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      {/* Notebook Cover */}
      <div className="max-w-4xl w-full">
        <div className="notebook-cover aged-paper rounded-lg p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-amber-200 relative overflow-hidden">
          {/* Torn Label */}
          <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 -rotate-2">
            <div className="torn-label bg-white p-2 sm:p-3 shadow-lg border border-gray-300">
              <div className="handwriting text-sm sm:text-lg text-ink-brown font-semibold">
                Portfolio of {personalInfo.name}
              </div>
            </div>
          </div>

          {/* Notebook Holes - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 hidden sm:flex flex-col justify-evenly">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
            ))}
          </div>

          {/* Margin Line - Hidden on mobile */}
          <div className="absolute left-12 sm:left-20 top-0 bottom-0 w-0.5 bg-red-300 opacity-50 hidden sm:block" />

          {/* Content */}
          <div className="sm:ml-16 space-y-6 sm:space-y-8 mt-12 sm:mt-16">
            {/* Header with Photo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-ink-blue to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-75"></div>
                <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                  {/* TODO: replace this initials placeholder with a real photo. Drop the
                      image file in /public/assets/ and swap this div for:
                      <img src="/assets/your-photo.jpg" alt={personalInfo.name} className="w-full h-full object-cover object-center" /> */}
                  <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-ink-blue to-blue-600 flex items-center justify-center">
                    <span className="handwriting text-6xl sm:text-7xl text-white font-bold">{personalInfo.initials}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Sparkles size={24} className="text-ink-blue" />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                <div className="relative">
                  <h1 className="handwriting text-4xl sm:text-5xl lg:text-6xl text-ink-blue font-bold leading-tight">
                    {personalInfo.name}
                  </h1>
                  <div className="absolute -top-1 sm:-top-2 -right-2 sm:-right-4 tape w-12 sm:w-16 h-6 sm:h-8 transform rotate-12" />
                </div>

                <p className="handwriting text-lg sm:text-xl lg:text-2xl text-ink-brown px-2 sm:px-0">
                  {personalInfo.tagline}
                </p>

                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4 text-pencil-gray">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Welcome Sticky Note */}
            <div className="relative flex justify-center sm:justify-start">
              <div className="sticky-note p-4 sm:p-6 max-w-sm sm:max-w-md transform rotate-1 shadow-lg">
                <div className="handwriting text-base sm:text-lg text-ink-blue font-semibold mb-2">
                  Hey there! 👋
                </div>
                <div className="text-xs sm:text-sm text-pencil-gray leading-relaxed">
                  Welcome to my digital notebook — where I share what I've built, researched, and shipped.
                </div>
                <div className="absolute -top-1 right-4 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full shadow-md" />
              </div>
            </div>

            {/* Quick Stats as Sticky Notes */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-8 sm:mt-12">
              <div className="sticky-note px-3 py-2 sm:px-4 sm:py-3 rounded shadow-md transform rotate-1">
                <div className="handwriting text-sm sm:text-lg font-semibold text-ink-blue">LLMs & Agents</div>
                <div className="text-xs text-pencil-gray">RAG • LangChain</div>
              </div>

              <div className="sticky-note px-3 py-2 sm:px-4 sm:py-3 rounded shadow-md transform -rotate-1" style={{ background: 'linear-gradient(135deg, #E8F4FD 0%, #B3D9F2 100%)' }}>
                <div className="handwriting text-sm sm:text-lg font-semibold text-ink-blue">Cloud Deployment</div>
                <div className="text-xs text-pencil-gray">AWS • Azure AI</div>
              </div>

              <div className="sticky-note px-3 py-2 sm:px-4 sm:py-3 rounded shadow-md transform rotate-2" style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #BBF7D0 100%)' }}>
                <div className="handwriting text-sm sm:text-lg font-semibold text-ink-blue">ML Engineering</div>
                <div className="text-xs text-pencil-gray">Python • Evaluation</div>
              </div>
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-8">
                <div className="handwriting text-base sm:text-lg text-ink-brown">Connect with me:</div>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                        title={social.label}
                      >
                        <Icon size={14} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Digital Signature */}
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
              <div className="space-y-2 text-center sm:text-left">
                <div className={`handwriting text-2xl sm:text-3xl lg:text-4xl text-ink-brown transform -rotate-1 transition-all duration-1000 ${signatureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {personalInfo.name}
                </div>
                <div className="text-xs sm:text-sm text-pencil-gray">{personalInfo.title}</div>
                <div className="text-xs text-pencil-gray">
                  📧 {personalInfo.email} | 📞 {personalInfo.phone}
                </div>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="group flex items-center space-x-2 bg-ink-blue text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <span className="font-medium">Explore My Journey</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Decorative Doodles - Adjusted for mobile */}
          <div className="absolute top-1/4 right-4 sm:right-8 opacity-20">
            <div className="handwriting text-lg sm:text-2xl text-ink-brown transform rotate-12">
              🤖 Agents
            </div>
          </div>
          <div className="absolute bottom-1/4 left-16 sm:left-32 opacity-15">
            <div className="handwriting text-sm sm:text-lg text-ink-blue transform -rotate-6">
              💡 Ideas
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-300 rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-16 w-4 h-4 sm:w-6 sm:h-6 bg-pink-300 rounded-full opacity-30" />
      <Sparkles className="absolute top-1/4 left-4 sm:left-8 text-orange-300 opacity-20" size={24} />
    </div>
  );
};

export default Cover;
