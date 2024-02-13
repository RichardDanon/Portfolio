import React from 'react';
import profileImage from '../Images/picture.jpg';
import resumePDF from '../Documents/Resume English.pdf';


function ProfileSection() {
  return (
    <section className="flex flex-wrap justify-center items-center py-16 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {/* Profile Image */}
        <div className="flex justify-center flex-shrink-0 bg-cover bg-center rounded-2xl w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 mb-8 sm:mb-0 sm:mr-8" style={{ backgroundImage: `url(${profileImage})` }}></div>

        {/* Text Content */}
        <div className="text-center sm:text-left max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Richard Danon-Woedey</h1>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
            I take pride in being a hard worker who never backs down from a challenge.
            I make sure I see every task I start through to the end. This determination is a big part of how
            I work because I don't let tough times get me down, and I always aim for the best results.
            Plus, I'm good at planning. I can figure out how much time and effort a task will need, which helps me manage my resources effectively.
            This self-awareness helps me finish projects quickly and on schedule. I'm also a pretty quick problem solver.
            I can spot the main issues in complex problems and cut through the confusion to get to the heart of the matter.
            My knack for getting to the core of a problem is what makes me a valuable part of your team.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center sm:justify-start">
            <a href="#projects" className="px-4 py-2 mr-4 border-2 border-black bg-black text-white text-lg no-underline inline-block">Projects</a>
            {/* CV Download Button */}
            <a href={resumePDF} download="Resume English.pdf" className="flex items-center px-4 py-2 border-2 border-black bg-white text-black text-md lg:text-lg no-underline">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
