import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ballImage from '../Images/ball.jpg';

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
      text: "Passionate about creating seamless and engaging user experiences...",
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
          <div key={item.id} className="relative h-96 md:h-auto"> 
            <img src={item.backgroundImg} alt={item.title} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full pb-6 px-6 text-white bg-gradient-to-t from-black via-transparent">
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
