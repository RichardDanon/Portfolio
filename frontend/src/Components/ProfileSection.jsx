import React from 'react';
import profileImage from '../Images/picture.jpg';
import { FaDownload } from 'react-icons/fa'; // Import the download icon

function ProfileSection() {
  return (
    <section className="flex flex-wrap justify-center items-center py-16 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {/* Profile Image */}
        <div className="flex justify-center flex-shrink-0 bg-cover bg-center rounded-2xl w-80 h-80 m-0 mb-8 sm:mr-8" style={{ backgroundImage: `url(${profileImage})` }}></div>

        {/* Text Content */}
        <div className="text-center sm:text-left max-w-5xl min-w-64">
          <h1 className="text-3xl font-bold mb-4">Richard Danon-Woedey</h1>
          <p className="text-lg text-gray-700">
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
            <a href="../Document/Resume English.pdf" download="Resume English.pdf" className="flex items-center px-4 py-2 border-2 border-black bg-white text-black text-lg no-underline inline-block">
              Download CV <FaDownload className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
