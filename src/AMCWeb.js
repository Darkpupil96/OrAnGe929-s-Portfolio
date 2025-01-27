import React, { useEffect, useRef, useState } from 'react';
import Styles from './style.module.css';
import TopPic from './AMCImages/AMCTopPic.png';
import Reception from './AMCImages/Reception.png';
import WordPressElementor from './AMCImages/WordPressElementor.png';
import WidgetExample from './AMCImages/WidgetExample.png';



function AMCWeb({ SwitcherOnClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  function getThreshold() {
    const windowWidth = window.innerWidth;
    return windowWidth > 900 ? 0.1 : 0.2;
  }
  useEffect(() => {
    const Switcherobserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold:  getThreshold() } // 当组件完全可见时触发
    );

    const currentElement = componentRef.current;
    if (currentElement) {
      Switcherobserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        Switcherobserver.unobserve(currentElement);
      }
    };
  }, []);

  // 处理滚动逻辑
  const handleScrollToTop = () => {
    const currentElement = componentRef.current;
    if (currentElement) {
      currentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

//图片放大
const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(!isFullScreen);
  };
// 使用 useEffect 动态控制 body 的 overflow
useEffect(() => {
  if (isFullScreen) {
    document.body.style.overflow = 'hidden'; // 禁止滚动
  } else {
    document.body.style.overflow = ''; // 恢复滚动
  }

  // 在组件卸载时清理
  return () => {
    document.body.style.overflow = '';
  };
}, [isFullScreen]);
  return (
    <div id="AMC" className={Styles.Web} ref={componentRef}>
      <div className={Styles.Content}>
        <img src={TopPic} alt="British Rock Chronicle Project" width="100%" style={{ borderRadius: '2rem', marginBottom: '5vw' }} />
       
        <a  style={{textDecoration:'none'}} target="_blank" href="https://www.sestudy.com.au/t1/"><h2>Australian Management College Web Dev</h2></a>
    <p>AMC, an educational institution located in <strong>Brisbane</strong>, a school that provides general English education and business courses. I started my internship at this college as a web developer in November 2024, where I developed a portal website for promotional purposes.
    <a target="_blank" href="https://www.sestudy.com.au/t1/">Visit</a>
    </p>
        <br></br>
                <img
                  src={Reception}
                  alt="AMC Reception"
                  width="100%"
                  style={{ borderRadius: "1.5rem", marginBottom: "5vw" }}
                />
<hr style={{opacity: '0.5'}}></hr>
            <p>During my internship at AMC (Australian Management College), I began working with WordPress and developed AMC's portal website using Elementor and PHP scripts. I designed five modules: <strong>Home</strong>, <strong>Courses</strong>, <strong>Student Services</strong>, <strong>AMC Campus</strong>, and <strong>Contact Us</strong>, each providing detailed information on the following:</p>

<ul>
    <li>The nature of AMC as an institution and the educational services it offers.</li>
    <li>A comprehensive introduction to the courses offered by AMC.</li>
    <li>The teaching environment, faculty, and accommodation provided for students at AMC.</li>
    <li>The hardware facilities available at the AMC campus.</li>
    <li>Guidance on contacting AMC for inquiries or applying for admission.</li>
</ul>
<br></br>
<h3>Wordpress Elementor</h3>
<p>Using WordPress Elementor, I customized an existing template to align the website with AMC's corporate identity, ensuring overall consistency and completeness. The interface was designed to be visually appealing, clean, and user-friendly.</p>
<div
              style={{
                position: isFullScreen ? "fixed" : "relative",
                top: isFullScreen ? "0" : "auto",
                left: isFullScreen ? "0" : "auto",
                width: isFullScreen ? "100vw" : "100%",
                height: isFullScreen ? "100vh" : "auto",
                backgroundColor: isFullScreen ? "rgba(0, 0, 0, 0.9)" : "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: isFullScreen ? 1000 : "auto",
                borderRadius: isFullScreen ? "0" : "1rem",
                marginBottom: isFullScreen ? "0" : "5vw",
                cursor: "pointer",
                overflow: "hidden",
              }}
              onClick={handleImageClick}
            >
              <img
                src={WordPressElementor}
                alt="AMC WordPress Elementor"
                style={{
                  width: isFullScreen ? "75%" : "100%",
                  height: isFullScreen ? "auto" : "auto",
                  maxHeight: isFullScreen ? "none" : "auto",
                  objectFit: isFullScreen ? "contain" : "cover",
                  borderRadius: isFullScreen ? "0" : "1rem",
                }}
              />
            </div>
            <br></br>
            <p>In addition, to maintain overall consistency, I designed several widgets to implement various functionalities while ensuring visual appeal. A demonstration is shown below:</p>
            <br></br>
                <img
                  src={WidgetExample}
                  alt="AMC Widget Example"
                  width="80%"
                  style={{ borderRadius: "1.5rem", marginBottom: "5vw" }}
                />

                <br></br>
                <h3>Reflection</h3>
                <p>In this internship project, I not only gained more industry experience in web development but also realized that small businesses, with limited budgets, tend to prioritize platforms like WordPress for website development. As a front-end developer, it is a thought-provoking question to consider how to combine my skills with current industry trends to better serve employers.</p>
      </div>
      {isVisible && (
             <div className={Styles.SwitcherContainer}>
               <button
                 className={Styles.SwitcherButton}
                 onClick={() => {
                   handleScrollToTop(); // 滑动到顶部
                   SwitcherOnClick("left"); // 触发传入的 SwitcherOnClick 回调
                 }}
               >
                 {"<"}
               </button>
               <button
                 className={Styles.SwitcherButton}
                 onClick={() => {
                   handleScrollToTop(); // 滑动到顶部
                   SwitcherOnClick("right"); // 触发传入的 SwitcherOnClick 回调
                 }}
               >
                 {">"}
               </button>
             </div>
           )}
         </div>
       );
     }
     

export default AMCWeb;