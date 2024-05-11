import React from 'react';
import { useTranslation } from 'react-i18next';
import profileImage from '../Images/picture.jpg';
import resumePDF from '../Documents/Resume English.pdf';
import resumeFrPDF from '../Documents/Curriculum Vitae Français.pdf';

function ProfileSection() {
  const { t, i18n } = useTranslation();

  // Determine which resume to use based on the current language
  const isFrench = i18n.language === 'fr';
  const resumeLink = isFrench ? resumeFrPDF : resumePDF;
  const resumeFileName = isFrench ? 'Curriculum Vitae Français.pdf' : 'Resume English.pdf';

  return (
    <section className="flex flex-wrap justify-center items-center py-16 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {/* Profile Image */}
        <div
          className="flex justify-center flex-shrink-0 bg-cover bg-center rounded-2xl w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 mb-8 sm:mb-0 sm:mr-8"
          style={{ backgroundImage: `url(${profileImage})` }}
        ></div>

        {/* Text Content */}
        <div className="text-center sm:text-left max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('profile.name')}
          </h1>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
            {t('profile.description')}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center sm:justify-start">
            <a
              href="#projects"
              className="px-4 py-2 mr-4 border-2 border-black bg-black text-white text-lg no-underline inline-block"
            >
              {t('profile.projects_button')}
            </a>
            {/* CV Download Button */}
            <a
              href={resumeLink}
              download={resumeFileName}
              className="flex items-center px-4 py-2 border-2 border-black bg-white text-black text-md lg:text-lg no-underline"
            >
              {t('profile.download_cv_button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
