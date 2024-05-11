import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
    name: "moving_express",
    description: "projects.moving_express.description",
    tags: ["React", "Javascript", "MySQL", "MongoDB", "Spring boot", "Jira", "Auth0", "Docker", "CI/CD"],
    images: [MovingExpress1, MovingExpress2, MovingExpress3, MovingExpress4],
    repoLink: "https://github.com/nic5694/MovingExpress",
    TrueLink: "https://movingexpress.systems/"
  },
  {
    name: "mini_golf_game",
    description: "projects.mini_golf_game.description",
    tags: ["Unity", "C#", "Game Development", "Multiplayer"],
    images: [GameDev1, GameDev2, GameDev3],
    repoLink: "https://github.com/RichardDanon/Final_Game_Project",
  }
];

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
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const ProjectTab = ({ project, activeProject, setActiveProject }) => {
  const { width } = useWindowSize();
  const { t } = useTranslation();

  const getDisplayName = (projectName) => {
    if (width < 464) {
      switch (projectName) {
        case "moving_express":
          return t('projects.moving_express.short_name');
        case "mini_golf_game":
          return t('projects.mini_golf_game.short_name');
        default:
          return t(`projects.${projectName}.name`);
      }
    }
    return t(`projects.${projectName}.name`);
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
  const { t } = useTranslation();
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
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-800 mb-2">
          {t('projects.title')}
        </h2>
        <div className="flex justify-start space-x-2 mb-4 overflow-x-auto">
          {projects.map((project) => (
            <ProjectTab
              key={project.name}
              project={project.name}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>
        <Carousel
          responsive={responsive}
          ssr={true}
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
            <div key={index} className="flex justify-center items-center h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <img src={image} alt={`${t(`projects.${activeProjectData.name}.name`)} - ${index + 1}`} className="max-w-full h-auto object-contain" />
            </div>
          ))}
        </Carousel>
        <div className="mt-6">
          <h3 className="text-2xl font-bold">{t(`projects.${activeProjectData.name}.name`)}</h3>
          <p className="text-gray-600">{t(activeProjectData.description)}</p>
          <div className="mt-4">
            {activeProjectData.tags.map((tag, index) => (
              <span key={index} className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-gray-200 text-gray-700 rounded mr-2">
                {tag}
              </span>
            ))}
          </div>
          <a href={activeProjectData.repoLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
            {t('projects.view_repository')}
          </a> <></>
          {activeProjectData.TrueLink && (
            <a href={activeProjectData.TrueLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
              {t('projects.visit_website')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
