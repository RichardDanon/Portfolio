import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SkillTab = ({ category, activeCategory, setActiveCategory, label }) => (
  <button
    className={`text-xs px-2 py-1 rounded-md ${
      activeCategory === category ? 'bg-gray-200 text-gray-800' : 'text-gray-300 bg-gray-700'
    }`}
    onClick={() => setActiveCategory(category)}
  >
    {label}
  </button>
);

const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('software');

  const skillsCategories = {
    software: [
      'C#', 'Java', 'HTML CSS', 'SQL', 'MySQL', 'GitHub', 'Kotlin', 'Swift', 'PHP', 'Laravel', 'Linux (Ubuntu)', 
      'JavaScript (React)', 'Azure (ASP.NET CORE)', 'Unity', 'Python', 'PowerShell', 'Pode Web', 'Figma'
    ],
    expertise: [
      'Project Management', 'Team Management', 'Time Management', 'JIRA', 'Power Automate'
    ],
    language: [
      'French (Bilingual)', 'English (Bilingual)', 'Ewe (Beginner)'
    ],
  };

  return (
    <div className="flex justify-center py-5">
      <div className="w-4/5 bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-800 mb-2">
          {t('skills.title')}
        </h2>
        <div className="flex justify-start space-x-2 mb-4">
          {Object.keys(skillsCategories).map((category) => (
            <SkillTab
              key={category}
              category={category}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              label={t(`skills.categories.${category}`)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center">
          {skillsCategories[activeCategory].map((skill, index) => (
            <div key={index} className="p-2 bg-gray-200 text-gray-800 rounded-md text-xs md:text-sm">
              {t(`skills.${activeCategory}.${skill.toLowerCase().replace(/[^a-z0-9]/g, '_')}`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
