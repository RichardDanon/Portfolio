import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OfficeImage from '../Images/office.jpg'; // Make sure the path to your image is correct

const projects = [
  {
    name: "Altride",
    description: "An all inclusive ride hailing application for all kinds of users...",
    tags: ["React", "TailwindCSS", "Node.js"],
    images: [OfficeImage, "/path/to/altride-image2.jpg"], // Replace with actual paths
    repoLink: "https://github.com/username/altride", // Replace with actual repository URL
  },
  {
    name: "MovingExpress",
    description: "Application for helping clients with their moves nationally and internationally (USA). Microservice-based API with Spring boot.",
    tags: ["React", "Javascript", "MySQL", "MongoDB", "Spring boot", "Jira", , "Auth0"],
    images: ["/path/to/movingexpress-image1.jpg", "/path/to/movingexpress-image2.jpg"], // Replace with actual paths
    repoLink: "https://github.com/username/movingexpress", // Replace with actual repository URL
  },
  {
    name: "Mini Golf Game",
    description: "An interactive mini-golf game for all ages...",
    tags: ["Unity", "C#", "Photon"],
    images: ["/path/to/minigolf-image1.jpg", "/path/to/minigolf-image2.jpg"], // Replace with actual paths
    repoLink: "https://github.com/username/minigolfgame", // Replace with actual repository URL
  },
  // ... other projects
];

const ProjectTab = ({ project, activeProject, setActiveProject }) => (
  <button
    className={`text-sm px-3 py-2 rounded-md ${
      activeProject === project ? 'bg-gray-200 text-gray-800' : 'text-gray-300 bg-gray-700'
    }`}
    onClick={() => setActiveProject(project)}
  >
    {project}
  </button>
);

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
        <div className="flex justify-start space-x-2 mb-4">
          {projects.map((project) => (
            <ProjectTab key={project.name} project={project.name} activeProject={activeProject} setActiveProject={setActiveProject} />
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
            <div key={index} className="flex justify-center items-center h-96"> 
              <img
                src={image}
                alt={`${activeProjectData.name} - ${index + 1}`}
                className="max-w-lg mx-auto h-auto"
              />
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
