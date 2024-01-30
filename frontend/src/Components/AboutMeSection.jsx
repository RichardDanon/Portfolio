import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';

const AboutMeSection = () => {
  const carouselItems = [
    {
      id: 1,
      text: "Passionate about creating seamless and engaging user experiences, I specialize in UX/UI design with a keen focus on intuitive interfaces. With over 5 years of experience in the industry, I have developed a deep understanding of user-centric design principles, working across diverse platforms.",
      title: "Hobbies",
      backgroundImg: 'path_to_image_1.jpg',
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
    <div style={{ width: '80%', height: '300px', margin: 'auto' }}>
      <Carousel>
        {carouselItems.map(item => (
          <div key={item.id} style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${item.backgroundImg})`,
            backgroundSize: 'cover',
            borderRadius: '10px',
            position: 'relative', 
          }}>
            <div style={{
              position: 'absolute',
              bottom: 0, 
              left: 0,
              width: '100%',
              height: '75%',
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              boxSizing: 'border-box',
            }}>
              <h2 style={{ color: 'white', margin: 0 }}>{item.title}</h2>
              <p style={{ color: 'white', textAlign: 'center' }}>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AboutMeSection;
