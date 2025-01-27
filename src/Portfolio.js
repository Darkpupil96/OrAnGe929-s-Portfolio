import React, { useEffect, useState, useRef } from 'react';
import Styles from './style.module.css';
import AccordionItem from './AccordionItem.tsx';
import GalapagosPoster from './galapagosCard.png';

import GalapagosProjectWeb from './GalapagosProjectWeb.js';
import AMCWeb from './AMCWeb.js';
import CubeProjectWeb from './CubeProjectWeb.js';
import BritishRockChronicleWeb from './BritishRockChronicleWeb.js';
import Cube from './Cube.png';
import AMC from './AMC.png';
import BritishRock from './BritishRock.png';

import ThreeCard from './ThreeCard.js';

function Portfolio() {
  const ProjectList = [
    { title: 'Galapagos Tourism Web Design', content: GalapagosPoster, Id: "Galapagos" },
    { title: 'Australian Management College Web Dev', content: AMC, Id: "AMC" },
    { title: 'Groove - An Interactive Music Device', content: Cube, Id: "Groove" },
    { title: 'British Rock chronicle', content: BritishRock, Id: "BritishRock" },
  ];

  const [hoveredTitle, setHoveredTitle] = useState('Galapagos Tourism Web Design');
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  const handleTitleHover = (title) => {
    setHoveredTitle(title);
  };

  const getHoveredContent = () => {
    const project = ProjectList.find((p) => p.title === hoveredTitle);
    return project ? (
      <ThreeCard imageSrc={project.content} targetId={project.Id} />
    ) : (
      <ThreeCard imageSrc={GalapagosPoster} targetId="Galapagos" />
    );
  };

  const SwitcherOnClick = (direction) => {
    const currentIndex = ProjectList.findIndex((p) => p.title === hoveredTitle);
    const nextIndex =
      direction === 'left'
        ? (currentIndex - 1 + ProjectList.length) % ProjectList.length
        : (currentIndex + 1) % ProjectList.length;
  
    setHoveredTitle(ProjectList[nextIndex].title);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const portfolioElement = portfolioRef.current;
    if (portfolioElement) {
      observer.observe(portfolioElement);
    }

    return () => {
      if (portfolioElement) {
        observer.unobserve(portfolioElement);
      }
    };
  }, []);

  return (
    <div id="Portfolio" className={Styles.Portfolio} ref={portfolioRef}>
      {isVisible && (
        <>
          <div style={{ textAlign: 'left' }}>
            <h1 className={Styles.ProjectTitle}>Projects</h1>
          </div>
          <div className={Styles.ProjectBox}>
            <div className={Styles.ProjectContent}>
              <AccordionItem
                hoveredTitle={hoveredTitle}
                title="Galapagos Tourism Web Design"
                onTitleHover={handleTitleHover}
                targetId="Galapagos"
              >
                <p className={Styles.AccordionText}>
                  A front-end web design project using HTML, CSS, and JavaScript to
                  present Galápagos Islands tourism information with modules for flight
                  booking, accommodation, and dining.
                  <a
                    target="_blank"
                    href="https://darkpupil96.com/Galapagos/index.html"
                    style={{ textDecoration: 'none' }}
                  >
                    <span style={{ fontWeight: 'bold' }}>Visit Site</span>{' '}
                  </a>
                </p>
              </AccordionItem>
              <AccordionItem
                hoveredTitle={hoveredTitle}
                title="Australian Management College Web Dev"
                onTitleHover={handleTitleHover}
                targetId="AMC"
              >
                <p className={Styles.AccordionText}>
                An internship project developed during the internship at Australian Management College, which involved creating a portal website detailing the specifics of the AMC educational institution. The project was implemented using WordPress/PHP.
                <a
                    target="_blank"
                    href="https://www.sestudy.com.au/t1/"
                    style={{ textDecoration: 'none' }}
                  >
                    <span style={{ fontWeight: 'bold' }}>Visit Site</span>{' '}
                  </a>
                </p>
              </AccordionItem>
              <AccordionItem
                hoveredTitle={hoveredTitle}
                title="Groove - An Interactive Music Device"
                onTitleHover={handleTitleHover}
                targetId="Groove"
              >
                <p className={Styles.AccordionText}>
                  An Interactive Music Creation Device," a pioneering project in the
                  intersection of music and technology. Designed for those new to music
                  production, this installation is a journey into the heart of music
                  creation, made accessible and engaging for all.
                </p>
              </AccordionItem>
              <AccordionItem
                hoveredTitle={hoveredTitle}
                title="British Rock chronicle"
                onTitleHover={handleTitleHover}
                targetId="BritishRock"
              >
                <p className={Styles.AccordionText}>
                  An infographic design that visually presents the active periods of
                  various famous British rock bands, the formation timelines of
                  different rock music styles, and some significant events.
                </p>
              </AccordionItem>
            </div>
            <div className={Styles.ProjectDisplay}>{getHoveredContent()}</div>
          </div>
          <div className={Styles.ProjectDetails}>
            {hoveredTitle === 'Galapagos Tourism Web Design' ? (
              <GalapagosProjectWeb SwitcherOnClick={SwitcherOnClick} />
            ) : null}
               {hoveredTitle === 'Australian Management College Web Dev' ? (
              <AMCWeb SwitcherOnClick={SwitcherOnClick} />
            ) : null}
             {hoveredTitle === 'Groove - An Interactive Music Device' ? (
              <CubeProjectWeb SwitcherOnClick={SwitcherOnClick} />
            ) : null}
                         {hoveredTitle === 'British Rock chronicle' ? (
              <BritishRockChronicleWeb SwitcherOnClick={SwitcherOnClick} />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

export default Portfolio;
