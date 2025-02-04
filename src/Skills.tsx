import Styles from './style.module.css';
import React, { useState } from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const skillsData = [
    { name: "Python", level: 0.6, description: "Python is a versatile programming language known for its simplicity and readability. It's widely used in web development, data science, and automation." },
    { name: "Unity", level: 0.4, description: "Unity is a popular game development engine used to create both 2D and 3D games. It's widely used for cross-platform game development." },
    { name: "Arduino", level: 0.8, description: "Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's commonly used for prototyping and DIY electronics projects." },
    { name: "Adobe Photoshop", level: 0.8, description: "Adobe Photoshop is a leading photo editing software, widely used for graphic design, image manipulation, and digital art." },
    { name: "Adobe Illustrator", level: 0.8, description: "Adobe Illustrator is a vector graphics software used for creating logos, icons, illustrations, and typography." },
    { name: "Music Producing", level: 0.8, description: "Music producing involves creating, composing, and arranging music tracks using digital audio workstations and other music tools." },
    { name: "Visualization", level: 0.7, description: "Visualization refers to the graphical representation of data or concepts to make complex information easier to understand." },
    { name: "Interaction Design", level: 1, description: "Interaction design focuses on creating engaging interfaces with well-thought-out behaviors for users." },
    { name: "VSCode", level: 1, description: "Visual Studio Code is a lightweight, open-source code editor developed by Microsoft, known for its powerful features and extensions." },
    { name: "TypeScript", level: 0.8, description: "TypeScript is a statically typed superset of JavaScript that adds optional types to help build scalable and maintainable applications." },
    { name: "React", level: 0.8, description: "React is a popular JavaScript library for building user interfaces, particularly single-page applications." },
    { name: "HTML", level: 1, description: "HTML (Hypertext Markup Language) is the standard language for creating web pages and web applications." },
    { name: "Vanilla JS", level: 0.9, description: "Vanilla JS refers to using plain JavaScript without any frameworks or libraries to build web applications." },
    { name: "UI Design", level: 0.7, description: "UI Design (User Interface Design) focuses on creating aesthetically pleasing and user-friendly interfaces for applications." },
    { name: "UX Design", level: 0.7, description: "UX Design (User Experience Design) is about enhancing user satisfaction by improving the usability, accessibility, and pleasure in using a product." },
    { name: "Express", level: 0.5, description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications." },
    { name: "Next.js", level: 0.5, description: "Next.js is a React framework that enables server-side rendering and static site generation for web applications." },
    { name: "Node.js", level: 0.5, description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to use JavaScript for server-side scripting." },
];

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const handleSkillClick = (skillName: string) => {
        setSelectedSkill(skillName);
    };

    const selectedSkillData = skillsData.find(skill => skill.name === selectedSkill);

    return (
        <div id="Skills" className={Styles.Skills}>
            {/* 3D Skill Cloud */}
            <TagCloud 
                className={Styles.TagCloud}
                options={(w: Window & typeof globalThis) => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "fast",
                })}
                onClick={(tag: string) => handleSkillClick(tag)}
                onClickOptions={{ passive: true }}
            >
                {skillsData.map(skill => skill.name)}
            </TagCloud>

            {/* Skill Description Section */}
            <div className={Styles.SkillContent}>
                {selectedSkillData ? (
                    <div className={Styles.SkillDescription}>
                        <h2>{selectedSkillData.name}</h2>
                        <p>{selectedSkillData.description}</p>
                        <span>Skill level:</span>
                        <progress value={selectedSkillData.level} max={1} />
                    </div>
                ) : (
                    <div className={Styles.SkillDescription}>
                        <h4>Please click on a skill to see its description.</h4>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
