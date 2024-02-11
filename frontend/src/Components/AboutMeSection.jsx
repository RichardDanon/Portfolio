import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import ballImage from '../Images/ball.jpg';

const AboutMeSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const carouselItems = [
    {
      id: 1,
      text: "Passionate about creating seamless and engaging user experiences, I specialize in UX/UI design with a keen focus on intuitive interfaces. With over 5 years of experience in the industry, I have developed a deep understanding of user-centric design principles, working across diverse platforms.",
      title: "Hobbies",
      backgroundImg: ballImage,
    },
    {
      id: 2,
      text: "As a developer, I enjoy building things that make a difference. Engaging with code to create efficient and impactful applications is what drives me in my professional journey.",
      title: "Professional",
      backgroundImg: 'path_to_image_2.jpg', 
    },
    {
      id: 3,
      text: "Marketing is not only about selling but about telling a story that resonates with the audience. My approach combines strategic thinking with creative execution to deliver compelling narratives.",
      title: "Marketing",
      backgroundImg: 'path_to_image_3.jpg',
    },
  ];

  return (
    <div className="w-full md:w-80 mx-auto" style={{ width: '80%', margin: 'auto' }}>
      <Carousel
        slidesToShow={1}
        infiniteLoop
        autoPlay 
        interval={5000} 
        showArrows={!isMobile}
        showStatus={isMobile}
        showThumbs={!isMobile} // Enable thumbs for swipe navigation on mobile
        statusFormatter={(current, total) => `${current} / ${total}`}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          !isMobile && hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="absolute top-1/2 left-0 transform -translate-y-1/2 prev-arrow bg-white text-gray-800 px-3 py-2 rounded-full shadow-md z-10">
              Prev
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          !isMobile && hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="absolute top-1/2 right-0 transform -translate-y-1/2 next-arrow bg-white text-gray-800 px-3 py-2 rounded-full shadow-md z-10">
              Next
            </button>
          )
        }
      >
        {carouselItems.map(item => (
          <div key={item.id} className="h-80 md:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            <img src={item.backgroundImg} alt={item.title} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full pb-6 px-6 text-white">
              <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AboutMeSection;
