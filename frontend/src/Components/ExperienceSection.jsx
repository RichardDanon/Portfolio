import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experience = [
  {
    id: 1,
    date: "06/2021 - 08/2023",
    company: "Grenier d’Art Grif&Graf (Part-time)",
    role: "Retail store for artwork and related products (majorly wood)",
    tasks: ["Inventory management"]
  },
  {
    id: 2,
    date: "06/2020 - 08/2021",
    company: "Wendy's (Part-time)",
    role: "Fast Food restaurant chain",
    tasks: ["Customer Service"]
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  return (
    <>
      <style>
        {`
          .vertical-timeline::before {
            /* Use Tailwind color palette in custom CSS */
            background: #000; /* Black line */
          }
        `}
      </style>
      <div className="py-5">
        <VerticalTimeline layout="1-column-left">
          {experience.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
              date={exp.date}
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }} // Dots black using Tailwind color palette
              // icon={<WorkIcon />} // Uncomment this line and replace with your icon component if needed
            >
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <h4 className="mb-4 text-md">{exp.role}</h4>
              <ul className="list-disc ml-5">
                {exp.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
export default ExperienceSection;
