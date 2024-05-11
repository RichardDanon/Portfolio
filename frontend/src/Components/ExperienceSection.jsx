import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import GrenierArtLogo from '../Images/GrifGraf_logo.png';
import WendysLogo from '../Images/wendys_logo.png';
import OpalRTLogo from '../Images/opal-rt_logo.png';

const experience = [
  {
    id: 1,
    date: "06/2021 - 08/2023",
    company: "grenier_art",
    role: "retail_store",
    tasks: ["inventory_management"],
    logo: GrenierArtLogo 
  },
  {
    id: 2,
    date: "06/2020 - 08/2021",
    company: "wendys",
    role: "fast_food_chain",
    tasks: ["customer_service"],
    logo: WendysLogo 
  },
  {
    id: 3,
    date: "03/2024 - 08/2024",
    company: "opal_rt",
    role: "it_department",
    tasks: ["developing_scripts", "flows_management", "documentation"],
    logo: OpalRTLogo 
  },
];

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <style>
        {`
          .vertical-timeline::before {
            background: #000;
          }
          .vertical-timeline-element--work::before {
            content: '';
            position: absolute;
            top: 20px;
            right: -60px;
            width: 80px;
            height: 80px;
            background-size: cover;
          }

          @media (max-width: 768px) {
            .vertical-timeline-element--work::before {
              display: none;
            }
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
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            >
              <img src={exp.logo} alt={t(`experience.${exp.company}.name`)} style={{ width: '60px', height: '60px', borderRadius: '50%', float: 'right' }} />
              <h3 className="font-bold text-lg">{t(`experience.${exp.company}.name`)}</h3>
              <h4 className="mb-4 text-md">{t(`experience.${exp.company}.role`)}</h4>
              <ul className="list-disc ml-5">
                {exp.tasks.map((task, index) => (
                  <li key={index}>{t(`experience.${exp.company}.tasks.${task}`)}</li>
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
