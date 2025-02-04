import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from "./NavigationBar";
import Styles from './style.module.css';
import About from "./About.js";
import Home from "./Home";
import Portfolio from "./Portfolio.js";
import Skills from "./Skills.tsx";
import Contact from "./Contact.js";
import LoadingOverlay from "./LoadingOverlay"; // 全局 Loading 动画组件

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [visibleSection, setVisibleSection] = useState('#Home');
  const [isUserScrolling, setIsUserScrolling] = useState(true); // 区分滚动和点击事件
  const [isLoading, setIsLoading] = useState(true); // 控制全局 Loading 动画
  const sectionsRef = useRef({
    Home: { ref: null, color: '#ffffff' },
    About: { ref: null, color: '#000000' },
    Portfolio: { ref: null, color: '#ffffff' },
    Skills: { ref: null, color: '#f0f0f0' },
    Contact: { ref: null, color: '#ffffff' },
  });

  // 模拟全局加载完成
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 模拟 2 秒的加载时间
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Assign ref to each section
    sectionsRef.current.Home.ref = document.getElementById('Home');
    sectionsRef.current.About.ref = document.getElementById('About');
    sectionsRef.current.Portfolio.ref = document.getElementById('Portfolio');
    sectionsRef.current.Skills.ref = document.getElementById('Skills');
    sectionsRef.current.Contact.ref = document.getElementById('Contact');

    let scrollTimeout;

    const handleScroll = () => {
      if (!isUserScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      Object.keys(sectionsRef.current).forEach((key) => {
        const section = sectionsRef.current[key];
        if (section.ref) {
          const { offsetTop, offsetHeight } = section.ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setBgColor(section.color);
            setVisibleSection('#' + key);
          }
        }
      });
    };

    const handleScrollWithDelay = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsUserScrolling(true);
        handleScroll();
      }, 100);
    };

    window.addEventListener('scroll', handleScrollWithDelay);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScrollWithDelay);
    };
  }, [isUserScrolling, visibleSection]);

  const handleNavigationClick = (section) => {
    setIsUserScrolling(false);
    setVisibleSection(section);
    setBgColor(sectionsRef.current[section.slice(1)].color);

    sectionsRef.current[section.slice(1)].ref.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      setIsUserScrolling(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingOverlay />} {/* Global Loading animation */}
      <div
        className={Styles.App}
        style={{ backgroundColor: bgColor, transition: 'background-color 0.2s' }}
      >
        <NavigationBar ClickSetVisible={handleNavigationClick} />
        <div style={{ height: '3vw' }}></div>
        <div id="Home" className={visibleSection === '#Home' ? Styles.visible : Styles.hidden}>
          <Home />
        </div>
        <div id="About" className={visibleSection === '#About' ? Styles.visible : Styles.hidden}>
          <About />
        </div>
        <div id="Portfolio" className={visibleSection === '#Portfolio' ? Styles.visible : Styles.hidden}>
          <Portfolio />
        </div>
        <div id="Skills" className={visibleSection === '#Skills' ? Styles.visible : Styles.hidden}>
          <Skills />
        </div>
        <div id="Contact" className={visibleSection === '#Contact' ? Styles.visible : Styles.hidden}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
