import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Basketball from '../Images/BasketBall.jpg';
import School from '../Images/School.jpg';
import Space from '../Images/Space.jpg';


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
      text: "I have been playing basketball since I was 10 years old. It has taught me the importance of teamwork, discipline, and perseverance.",
      title: "Basketball",
      backgroundImg: Basketball,
    },
    {
      id: 2,
      text: "I am curently studying Computer Science at Champlain College and plan to continue my studies in Software Engineering at ÉTS University. ",
      title: "Future Plan",
      backgroundImg: School, 
    },
    {
      id: 3,
      text: "Passionate about space and the universe, I have always been fascinated by the stars and the mysteries of the cosmos. I would love to work in a technological field that is related to space.",
      title: "Dreams",
      backgroundImg: Space,
    }
  ];

  return (
    <div className="w-full mx-auto" style={{ maxWidth: '60%' }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={isMobile ? "mobile" : "desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative" style={{ height: '500px' }}> {/* Custom height for each item */}
            <img src={item.backgroundImg} alt={item.title} className="object-cover w-full h-full" />
            {/* Gradient overlay */}
            <div className={`absolute bottom-0 left-0 w-full ${isMobile ? 'h-2/5' : 'h-2/5'} bg-gradient-to-t from-black to-transparent`}>
              <div className="flex h-full items-end pb-6 px-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h2>
                  <p className="text-sm md:text-base text-white">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AboutMeSection;
