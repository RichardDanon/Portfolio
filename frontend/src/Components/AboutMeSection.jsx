import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      text: t('carousel.basketball_text'),
      title: t('carousel.basketball_title'),
      backgroundImg: Basketball,
    },
    {
      id: 2,
      text: t('carousel.future_plan_text'),
      title: t('carousel.future_plan_title'),
      backgroundImg: School, 
    },
    {
      id: 3,
      text: t('carousel.dreams_text'),
      title: t('carousel.dreams_title'),
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
          <div key={item.id} className="relative" style={{ height: '500px' }}>
            <img src={item.backgroundImg} alt={item.title} className="object-cover w-full h-full" />
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
