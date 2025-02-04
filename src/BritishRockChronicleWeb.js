import React, { useEffect, useRef, useState } from 'react';
import Hammer from "hammerjs";
import Styles from './style.module.css';
import TopPic from './BritishRockChronicleImages/BritishRockTopPic.png';
import TimeLine from './BritishRockChronicleImages/TimeLine.png';
import Genres from './BritishRockChronicleImages/Genres.png';
import Geography from './BritishRockChronicleImages/Geography.png';
import RecordSales from './BritishRockChronicleImages/RecordSales.png';
import Memorial from './BritishRockChronicleImages/Memorial.png';
import BritishRockChronicle from './BritishRockChronicle.png';



function BritishRockChronicleWeb({ SwitcherOnClick }) {
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
    <div id="BritishRock" className={Styles.Web} ref={componentRef}>
      <div className={Styles.Content}>
        <img src={TopPic} alt="British Rock Chronicle Project" width="100%" style={{ borderRadius: '2rem', marginBottom: '5vw' }} />
       
    <h2>British Rock and Roll Infographic</h2>
    <p>This infographic poster,<strong>"British Rock and Roll,"</strong> is a comprehensive visual representation of the history, influence, and impact of British rock music. It combines historical timelines, genre evolution, geographical mapping, notable contributors, and statistical insights into one cohesive design.</p>
        <br></br>
        <h3>Infographic display</h3>
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
                borderRadius: isFullScreen ? "0" : "2rem",
                marginBottom: isFullScreen ? "0" : "5vw",
                cursor: "pointer",
                overflow: "hidden",
              }}
              onClick={handleImageClick}
            >
              <img
                src={BritishRockChronicle}
                alt="British Rock Chronicle Project"
                style={{
                  width: isFullScreen ? "65%" : "100%",
                  height: isFullScreen ? "auto" : "auto",
                  maxHeight: isFullScreen ? "none" : "auto",
                  objectFit: isFullScreen ? "contain" : "cover",
                  borderRadius: isFullScreen ? "0" : "2rem",
                }}
              />
            </div>

    <h3>Key Sections:</h3>
    <ul>
        <li>
            <strong>Rock Chronicles (Timeline):</strong>
            A chronological overview of major British rock bands and artists, spanning from the early 1960s to the late 1990s. Key moments include the rise of The Beatles, Led Zeppelin, Pink Floyd, Queen, and other iconic bands that defined the genre.
        </li>
        <br></br>
                <img
                  src={TimeLine}
                  alt="British Rock Timeline"
                  width="80%"
                  style={{ borderRadius: "1.5rem", marginBottom: "5vw" }}
                />
        <br></br>
        <li>
            <strong>Genre Statistics and Evolution:</strong>
            Shows the roots of British rock derived from blues, gospel, jazz, and folk music. It tracks the progression of rock genres over decades, such as the British Invasion (1960s), punk rock, glam rock, heavy metal (1970s), new wave, and synth-pop (1980s).
        </li>
        <br></br>
        <img
                  src={Genres}
                  alt="British Rock   Genres"
                  width="80%"
                  style={{ borderRadius: "1.5rem", marginBottom: "5vw" }}
                />
        <br></br>
        <li>
            <strong>Rock Geography:</strong>
            A map of the United Kingdom highlights the cities that were hubs for British rock development, such as Liverpool (The Beatles), Manchester (Oasis, The Smiths), London (Pink Floyd, Bowie, Queen), and Birmingham (the birthplace of heavy metal with Black Sabbath and Judas Priest).
        </li>
        
        <br></br>
        <img
                  src={Geography}
                  alt="British Rock Geography"
                  width="60%"
                  style={{ borderRadius: "1rem", marginBottom: "5vw" }}
                />
        <br></br>
        <li>
            <strong>Record Sales and RIAA Platinum:</strong>
            Features a chart listing the most successful British rock albums, such as <em>Led Zeppelin IV</em> and <em>The Dark Side of the Moon.</em> It also highlights bands with the most RIAA Platinum certifications and their longevity.
        </li>
        <br></br>
                <img
                  src={RecordSales}
                  alt="British Rock Record Sales"
                  width="80%"
                  style={{ borderRadius: "1.5rem", marginBottom: "5vw" }}
                />

        <br></br>
        <li>
            <strong>Memorial Section:</strong>
            Honors the contributions of prominent British rock musicians who passed away, such as John Lennon, Freddie Mercury, and others.
        </li>
        <br></br>
                <img
                  src={Memorial}
                  alt="British Rock Record Memorial"
                  width="50%"
                  style={{ borderRadius: "1.5rem", marginBottom: "5vw" }}
                />

        <br></br>
        
    </ul>

    <h3>Design Highlights:</h3>
    <ul>
        <li><strong>Color Coding:</strong> Genres and regions are visually separated by color for better clarity.</li>
        <li><strong>Mapping:</strong> Geographic regions are color-coded to denote the concentration of influential bands and artists.</li>
        <li><strong>Data Visualization:</strong> Features timelines, flowcharts, and charts for a detailed breakdown of sales, influence, and cultural impact.</li>
    </ul>


        

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
     

export default BritishRockChronicleWeb;