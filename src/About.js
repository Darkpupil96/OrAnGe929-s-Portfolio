import React, { useEffect, useRef, useState } from 'react';
import Styles from './style.module.css';
import MyPic from "./MyPic.png";

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const dotRef = useRef(null);
    const yearRef = useRef(null); 
    const expRef = useRef(null);
    const [intersecting, setIntersecting] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [position, setPosition] = useState(0);
    const [experiences, setExperiences] = useState([
        { year: "2018", description: "Bachelor of Industrial Design", content: "At Anhui University, I studied Industrial Design and earned a Bachelor's degree. During these four years, I developed a solid aesthetic foundation and cultivated sufficient skills in image design/3D model design, as well as design thinking." },
        { year: "2020", description: "Ecuador tour guide", content: "In Ecuador, I became a tour guide, coordinating clients' itineraries and communicating with locals by learning Spanish. Additionally, I served as the Design Director at a travel company, handling poster design and social media operations." },
        { year: "2022", description: "Start my Master study", content: "After the Covid outbreak, I returned to academia to advance my career, pursuing a Master of Interaction Design at the University of Queensland, Australia. Over two years, I merged design with programming, focusing on a career in front-end/web design. My expertise in graphic design/UI/UX and love for programming facilitated rapid progress." },
        { year: "2024", description: "Master of Interaction Design", content: "After obtaining my master's degree, I continued to deepen my knowledge in IT while job hunting, and attempted to become a full-stack developer to understand the entire product development process and technology." },
        { year: "2025", description: "Web Dev Intern", content: "Since November 2024, I have been interning at Australian Management College and developing the website for this educational institution." },
    ]);
    const [currentExp, setCurrentExp] = useState(experiences[0]);

    const updateExperience = (position) => {
        if (expRef.current && dotRef.current) {
            const totalLength = expRef.current.offsetWidth - dotRef.current.offsetWidth;
            const segments = experiences.length;
            const index = Math.floor((position / totalLength) * segments);
            if (index < segments && index >= 0) {
                setCurrentExp(experiences[index]);
            }
        }
    };

    const handleWheel = (e) => {
        const yearRect = yearRef.current.getBoundingClientRect();
        const yearCenterY = yearRect.top + yearRect.height / 2;
        const screenCenterY = window.innerHeight / 2;

        if (intersecting && Math.abs(yearCenterY - screenCenterY) < 150) {
            const maxPosition = expRef.current.offsetWidth - dotRef.current.offsetWidth;
            const minPosition = 0;

            if ((e.deltaY > 0 && position < maxPosition) || (e.deltaY < 0 && position > minPosition)) {
                e.preventDefault();
                const delta = e.deltaY;
                const newPosition = position + delta;
                const boundedPosition = Math.max(minPosition, Math.min(newPosition, maxPosition));
                setPosition(boundedPosition);
                updateExperience(boundedPosition);
            }
        }
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setStartX(e.clientX - position);
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const newPosition = e.clientX - startX;
            const maxPosition = expRef.current.offsetWidth - dotRef.current.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(newPosition, maxPosition));
            setPosition(boundedPosition);
            updateExperience(boundedPosition);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleTouchStart = (e) => {
        if (e.touches.length === 1) {
            setDragging(true);
            setStartX(e.touches[0].clientX - position);
        }
        e.preventDefault();
    };

    const handleTouchMove = (e) => {
        if (dragging && e.touches.length === 1) {
            const newPosition = e.touches[0].clientX - startX;
            const maxPosition = expRef.current.offsetWidth - dotRef.current.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(newPosition, maxPosition));
            setPosition(boundedPosition);
            updateExperience(boundedPosition);
        }
    };

    const handleTouchEnd = () => {
        setDragging(false);
    };

    useEffect(() => {
        const handleGlobalWheel = (e) => handleWheel(e);

        window.addEventListener('wheel', handleGlobalWheel, { passive: false });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleGlobalWheel);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [position, intersecting, dragging, startX]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting && entry.intersectionRatio > 0.5);
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (expRef.current && dotRef.current) {
                const totalLength = expRef.current.offsetWidth - dotRef.current.offsetWidth;
                const segments = experiences.length;
                const index = experiences.indexOf(currentExp);
                const newPosition = (index / segments) * totalLength;
                setPosition(newPosition);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentExp, experiences]);

    return (
        <div ref={ref} id="About" className={Styles.AboutMe}>
            <div className={isVisible ? Styles.ProfilePicVisible : Styles.ProfilePic}></div>
           
            <div  className={isVisible ? Styles.TextAboutMe : {}}>
            <div style={{width:'100%',height:'auto',alignItems:'center',paddingBottom:"2rem"}}> {(window.innerWidth < 900)?<img src={MyPic} alt="My picture" width="50%"/>:<></>}</div>
                <span className={Styles.Designer} onClick={() => {
                    document.getElementById('Portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}>Designer</span> <span>|</span>
                <span className={Styles.FrontEnd} onClick={() => {
                    document.getElementById('Portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}>Front-end developer</span>

                <div className={Styles.IntroText}>Hi, I am Mark Yang, a UI/UX designer and front-end developer with a strong background in Industrial, UI, and UX design. <br />
                    In the course of my studies, I shifted from a focus on conceptual and styling design to design that focuses on practical functionality and user experience.
                    <br /> Living in China, Ecuador, and Australia has broadened my perspective and deepened my understanding of design across cultures. I strive to create intuitive and engaging user experiences.</div>

                <div className={Styles.ExperienceContainer}>
                    <div ref={expRef} className={isVisible ? Styles.Experience : {}}>
                        <div
                            ref={dotRef}
                            className={Styles.Dot1}
                            style={{ left: `${position}px` }}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart} // Add touch start event
                        >
                            <span ref={yearRef} className={Styles.Year}>{currentExp.year}</span>
                        </div>
                        <p className={Styles.CurrentDesCription}>{currentExp.description}</p>
                        <p className={Styles.CurrentContent}>{currentExp.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;




