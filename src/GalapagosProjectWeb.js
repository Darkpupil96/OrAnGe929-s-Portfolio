import React, { useEffect, useRef, useState } from 'react';
import Hammer from "hammerjs";

import Styles from './style.module.css';
import TopPic from './GalapagosImages/galapagosTopPic.png';
import GalapagosLogo from './GalapagosImages/GalapagosLogo.png';
import GalapagosNav from './GalapagosImages/GalapagosNav.png';
import GalapagosDisplay from './GalapagosImages/GalapagosDisplay.jpg';
import SiteMap from './GalapagosImages/GalapagosSiteMap.png';
import LoFiPrototype from './GalapagosImages/LoFiPrototype.png';
import HiFiPrototype from './GalapagosImages/HiFiPrototype.png';
import GalapagosPoster from './Galapagosproject.png';

function GalapagosProjectWeb({ SwitcherOnClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);




  function getThreshold() {
    const windowWidth = window.innerWidth;
    return windowWidth > 900 ? 0.1 : 0.1;
  }
  useEffect(() => {
    const Switcherobserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: getThreshold() } // 当组件完全可见时触发
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

//检测鼠标滚动
const [isScrolling, setIsScrolling] = useState(false);

useEffect(() => {
  let timeout = null;

  const handleScroll = () => {
    setIsScrolling(true);
  
    clearTimeout(timeout);
    
    const delay = window.innerWidth < 900 ? 1000 : 3000; // 小屏 1000ms, 大屏 3000ms
  
    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, delay);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timeout);
  };
}, []);

  // 处理滚动逻辑
  const handleScrollToTop = () => {
    const currentElement = componentRef.current;
    if (currentElement) {
      currentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hammer = new Hammer(componentRef.current);

    hammer.on("swipeleft", () => {
      handleScrollToTop(); // 滑动到顶部
      SwitcherOnClick("left"); // 触发传入的 SwitcherOnClick 回调
    });
    hammer.on("swiperight", () => {
      handleScrollToTop(); // 滑动到顶部
      SwitcherOnClick("right"); // 触发传入的 SwitcherOnClick 回调
    });

    return () => {
      hammer.destroy(); // 组件卸载时销毁
    };
  }, []);

  return (
    <div id="Galapagos" className={Styles.Web} ref={componentRef}>
      <div className={Styles.Content}>
        <img src={TopPic} alt="Galapagos Project" width="100%" style={{ borderRadius: '2rem', marginBottom: '5vw' }} />
        <a  style={{textDecoration:'none'}} target="_blank" href="https://darkpupil96.com/Galapagos/index.html"> <h2>Galápagos Website Design & Implementation</h2></a>
        Galápagos, a beautiful place to visit. Since I have experience working as a tour guide I always wanted to let more people know about this amazing place. This is why I made a tourism website.{' '}
        <a target="_blank" href="https://darkpupil96.com/Galapagos/index.html">Visit</a>
        <h3>Target Audience</h3>
        <p>
          The target audience is <strong>solo backpackers</strong> who are seeking reliable information about the Galapagos Islands.
        </p>

        <h3>What the Website Provides:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>Essential information about the Galapagos Islands</li>
          <li>Flight options and schedules</li>
          <li>Accommodation recommendations and details</li>
          <li>Local travel agency contacts</li>
          <li>Restaurant guides and dining options</li>
        </ul>
        <h3>Site Map</h3>
        <img src={SiteMap} alt="Site Map" width="80%" style={{ borderRadius: '2rem' }} />
        <br /><br />
        <p><strong>Three modules in my web:</strong></p>
        <p>1. Homepage: Introduction to Attractions</p>
        <p>2. Function module: flight information / hotel information / travel agency information / restaurant information</p>
        <p>3. Help Center Module</p>
        <br />
        <h3>Low fidelity</h3>
        <img src={LoFiPrototype} alt="LoFi" width="80%" style={{ borderRadius: '2rem' }} />
        <br /><br />
        <h3>High fidelity</h3>
        <img src={HiFiPrototype} alt="LoFi" width="80%" style={{ borderRadius: '2rem' }} />
        <br /><br />
        <h3>Design decisions</h3>
        <br />
        <h4>Logo Design</h4>
        <p>
          <img src={GalapagosLogo} alt="Galapagos Logo" width="40%" style={{ borderRadius: '2rem', display: 'inline-block' }} />
          The logo is inspired by the Galapagos Islands' unique wildlife and natural beauty. According to 'User control and freedom', users can click the "Galapagos" logo to return to the home page.
        </p>
        <p>This text logo belongs to the "emergency exit". When users accidentally click on a page they don't want to browse, this button will bring them back to the home page.</p>
        <h4>Navigation Bar Design</h4>
        <img src={GalapagosNav} alt="Galapagos Navigation Bar" width="80%" style={{ borderRadius: '2rem' }} />
        <p>The navigation bar is located in the upper-right corner of the page, with options arranged in the sequence that aligns with a visitor's typical browsing journey: Flight → Hotel → Travel Agency → Restaurant. This design follows the principle of “Match between system and the real world,” ensuring an intuitive and user-friendly experience.</p>
        <p>In order to comply with consistency and standards, all my web designs use card styling to divide functional areas, which makes it easier for users to distinguish different contents.</p>
        <br />
        <img src={GalapagosDisplay} alt="Galapagos Web Display" width="80%" style={{ borderRadius: '1rem' }} />
        <br /><br />
        <p>In terms of <strong>‘Aesthetic and minimalist design’</strong>, my design keeps the look of the pages simple, easy to read, and beautiful by using simple color matching.</p>
        <br />
        <h3>Implementation</h3>
        <p>In this project, I utilized HTML, CSS, and Vanilla JavaScript to build the website from scratch, focusing on creating a responsive layout, ensuring cross-browser compatibility, and implementing interactive features without relying on external libraries or frameworks. This approach allowed me to have full control over the codebase and optimize the performance of the website.</p>
        <br></br>
        <h3>Web Poster</h3>
        <img src={GalapagosPoster} alt="Galapagos Web Poster" width="100%" style={{ borderRadius: '1rem' }} />
      </div>

      {isVisible && isScrolling && (
        <div className={Styles.SwitcherContainer}>
          <button
            className={Styles.SwitcherButton}
            onClick={() => {
              handleScrollToTop();
              SwitcherOnClick("left");
            }}
          >
            {"<"}
          </button>
          <button
            className={Styles.SwitcherButton}
            onClick={() => {
              handleScrollToTop();
              SwitcherOnClick("right");
            }}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}

export default GalapagosProjectWeb;


