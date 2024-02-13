import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OfficeImage from '../Images/office.jpg';
import MovingExpress1 from '../Images/MovingExpress1.jpg';
import MovingExpress2 from '../Images/MovingExpress2.jpg';
import MovingExpress3 from '../Images/MovingExpress3.jpg';
import MovingExpress4 from '../Images/MovingExpress4.jpg';
import GameDev1 from '../Images/GameDev1.jpg';
import GameDev2 from '../Images/GameDev2.jpg';
import GameDev3 from '../Images/GameDev3.jpg';






const projects = [
  {
    name: "MovingExpress",
    description: "Application for helping clients with their moves nationally and internationally (USA). Monolithic API with Spring boot.",
    tags: ["React", "Javascript", "MySQL", "MongoDB", "Spring boot", "Jira", "Auth0", "Docker", "CI/CD"],
    images: [MovingExpress1, MovingExpress2, MovingExpress3, MovingExpress4],
    repoLink: "https://github.com/nic5694/MovingExpress",
  },
  {
    name: "Mini Golf Game",
    description: "An interactive multiplayer mini-golf game for all ages. Developed using Unity and C#.",
    tags: ["Unity", "C#", "Game Development", "Multiplayer",],
    images: [GameDev1, GameDev2,GameDev3],
    repoLink: "https://github.com/RichardDanon/Final_Game_Project",
  },
  // Add more projects as needed
];

// Custom Hook to get the current window width
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount to get initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return windowSize;
};

const ProjectTab = ({ project, activeProject, setActiveProject }) => {
  const { width } = useWindowSize();
  
  const getDisplayName = (projectName) => {
    if (width < 464) { // For mobile devices
      switch (projectName) {
        case "MovingExpress":
          return "MovingEX";
        case "Mini Golf Game":
          return "Golf Game";
        default:
          return projectName;
      }
    }
    return projectName; // Default return for larger devices
  };

  return (
    <button
      className={`text-sm px-3 py-2 rounded-md ${
        activeProject === project ? 'bg-gray-200 text-gray-800' : 'text-gray-300 bg-gray-700'
      }`}
      onClick={() => setActiveProject(project)}
    >
      {getDisplayName(project)}
    </button>
  );
};

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0].name);
  const activeProjectData = projects.find(p => p.name === activeProject);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="w-4/5 bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-800 mb-2">Projects</h2>
        <div className="flex justify-start space-x-2 mb-4 overflow-x-auto">
          {projects.map((project) => (
            <ProjectTab key={project.name} project={project.name} activeProject={activeProject} setActiveProject={setActiveProject} />
          ))}
        </div>
        <Carousel
          responsive={responsive}
          ssr={true} // Means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        {activeProjectData.images.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]"> {/* Responsive heights for carousel items */}
                <img src={image} alt={`${activeProjectData.name} - ${index + 1}`} className="max-w-full h-auto object-contain" />
            </div>
        ))}
        </Carousel>
        <div className="mt-6">
          <h3 className="text-2xl font-bold">{activeProjectData.name}</h3>
          <p className="text-gray-600">{activeProjectData.description}</p>
          <div className="mt-4">
            {activeProjectData.tags.map((tag, index) => (
              <span key={index} className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-gray-200 text-gray-700 rounded mr-2">{tag}</span>
            ))}
          </div>
          <a href={activeProjectData.repoLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
