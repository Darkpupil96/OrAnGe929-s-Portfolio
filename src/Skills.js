
import Styles from './style.module.css';
import React, { useEffect, useState, useRef } from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
function Skills(){
    const skillDescriptions = {
        "Python": "Python is a versatile programming language known for its simplicity and readability. It's widely used in web development, data science, and automation.",
        "Unity": "Unity is a popular game development engine used to create both 2D and 3D games. It's widely used for cross-platform game development.",
        "Ardunio": "Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's commonly used for prototyping and DIY electronics projects.",
        "Adobe Photoshop": "Adobe Photoshop is a leading photo editing software, widely used for graphic design, image manipulation, and digital art.",
        "Adobe illustrator": "Adobe Illustrator is a vector graphics software used for creating logos, icons, illustrations, and typography.",
        "Music Producing": "Music producing involves creating, composing, and arranging music tracks using digital audio workstations and other music tools.",
        "Visualization": "Visualization refers to the graphical representation of data or concepts to make complex information easier to understand.",
        "Interaction Design": "Interaction design focuses on creating engaging interfaces with well-thought-out behaviors for users.",
        "VSCode": "Visual Studio Code is a lightweight, open-source code editor developed by Microsoft, known for its powerful features and extensions.",
        "TypeScript": "TypeScript is a statically typed superset of JavaScript that adds optional types to help build scalable and maintainable applications.",
        "React": "React is a popular JavaScript library for building user interfaces, particularly single-page applications.",
        "HTML": "HTML (Hypertext Markup Language) is the standard language for creating web pages and web applications.",
        "Vanilla Js": "Vanilla JS refers to using plain JavaScript without any frameworks or libraries to build web applications.",
        "UI Design": "UI Design (User Interface Design) focuses on creating aesthetically pleasing and user-friendly interfaces for applications.",
        "UX Design": "UX Design (User Experience Design) is about enhancing user satisfaction by improving the usability, accessibility, and pleasure in using a product.",
        "Express": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.",
        "Next.js": "Next.js is a React framework that enables server-side rendering and static site generation for web applications.",
        "Node.js": "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to use JavaScript for server-side scripting."
    };
    const [selectedSkill, setSelectedSkill] = useState("");
    return(

            <div id="Skills" className={Styles.Skills}>
               
 <TagCloud className={Styles.TagCloud}
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}
        onClick={(tag: string, ev: MouseEvent) => setSelectedSkill(tag)}
        onClickOptions={{ passive: true }}
    >
        {[
            "Python",
            "Unity",
            "Ardunio",
            "Adobe Photoshop",
            "Adobe illustrator",
            "Music Producing",
            "Visualization",
            "Interaction Design",
            "VSCode",
            "TypeScript",
            "React",
            "HTML",
            "Vanilla Js",
            "UI Design",
            "UX Design",
            "Express",
            "Next.js",
            "Node.js",
        ]}
    </TagCloud>

    <div className={Styles.SkillContent}>
                {selectedSkill ? (
                    <div className={Styles.SkillDescription}>
                        <h2>{selectedSkill}</h2>
                        <p>{skillDescriptions[selectedSkill]}</p>
                    </div>
                ) : (
                    <div className={Styles.SkillDescription}>
                    <h3>Please click on a skill to see its description.</h3>
                    </div>
                )}
            </div>

            </div>

           
       
    )
}
export default Skills;