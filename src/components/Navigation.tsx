import React from 'react';
import { BookOpen, User, GraduationCap, Briefcase, Wrench, FolderOpen, FlaskConical, Mail, Home } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  sections: Array<{ id: string; component: React.ComponentType }>;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, sections }) => {
  const getIcon = (sectionId: string) => {
    const iconMap = {
      cover: Home,
      about: User,
      education: GraduationCap,
      experience: Briefcase,
      skills: Wrench,
      projects: FolderOpen,
      research: FlaskConical,
      contact: Mail
    };
    return iconMap[sectionId as keyof typeof iconMap] || BookOpen;
  };

  const getSectionTitle = (sectionId: string) => {
    const titleMap = {
      cover: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      research: 'Research',
      contact: 'Contact'
    };
    return titleMap[sectionId as keyof typeof titleMap] || sectionId;
  };

  const allSections = [{ id: 'cover', component: () => null }, ...sections];

  const getNavButtonClasses = (isActive: boolean, isMobile: boolean = false) => {
    return `
      group flex items-center gap-2 p-2 rounded-lg transition-all duration-300
      ${isMobile ? 'flex-col justify-center text-xs' : 'flex-row justify-start text-sm'}
      ${isActive 
        ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-amber-50 shadow-lg shadow-amber-900/20 scale-105 transform border border-amber-500/20' 
        : 'hover:bg-amber-50/10 text-amber-700 hover:text-amber-500'}
    `;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-2 pr-4 bg-amber-900/10 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-amber-500/20">
          {allSections.map(({ id }) => {
            const Icon = getIcon(id);
            const isActive = currentSection === id;
            
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={getNavButtonClasses(isActive)}
                aria-label={getSectionTitle(id)}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse text-amber-400' : 'group-hover:scale-110 transition-transform group-hover:text-amber-500'}`} />
                <span className={`pr-2 ${isActive ? 'font-semibold text-amber-50' : ''}`}>
                  {getSectionTitle(id)}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-amber-900/10 backdrop-blur-md border-t border-amber-500/20 z-50 lg:hidden">
        <div className="flex justify-around items-center px-2 py-3 max-w-lg mx-auto">
          {allSections.map(({ id }) => {
            const Icon = getIcon(id);
            const isActive = currentSection === id;
            
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={getNavButtonClasses(isActive, true)}
                aria-label={getSectionTitle(id)}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
                <span className={`${isActive ? 'font-semibold' : ''}`}>
                  {getSectionTitle(id)}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;