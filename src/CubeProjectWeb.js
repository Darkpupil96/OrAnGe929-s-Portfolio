import React, { useEffect, useRef, useState } from "react";
import Styles from "./style.module.css";
import TopPic from "./CubeImages/CubeTopPic.png";
import FunctionalSystem from "./CubeImages/FunctionalSystem.png";
import PrototypeBuild from "./CubeImages/PrototypeBuild.png";
import FinalPrototype from "./CubeImages/FinalPrototype.png";
import FinalPrototypeFull from "./CubeImages/FinalPrototypeFull.png";
import TeamBehindTheProject from "./CubeImages/TeamBehindTheProject.JPG";
import YouTubeVideo from "./YouTubeVideo";

function CubeProjectWeb({ SwitcherOnClick }) {
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
      { threshold: getThreshold() } // 当组件部分可见时触发
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
    <div id="Groove" className={Styles.Web} ref={componentRef}>
      <div className={Styles.Content}>
        <img
          src={TopPic}
          alt="Cube Project"
          width="100%"
          style={{ borderRadius: "2rem", marginBottom: "5vw" }}
        />
        <h2>Groove - An Interactive Music Creation Device</h2>
        <p>
          Introducing the "Groove Cubes - An Interactive Music Creation Device,"
          a pioneering project in the intersection of <strong>music</strong> and{" "}
          <strong>technology</strong>. Designed for those new to music
          production, this installation is a journey into the heart of music
          creation, made accessible and engaging for all.
        </p>
        <br></br>
        <h3>My contribution</h3>
        <p>This is an academic project made by a team of 5 members, I was mainly responsible for:</p>
        <p>Interaction design/Ableton Live program/Arduino</p>
        <br></br>
        <h3>Conceptual Video</h3>
        <YouTubeVideo videoId="roaZhXhWSgc" />
        <br></br>
        <br></br>
        <h3>Prototype  functions</h3>

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
        src={FunctionalSystem}
        alt="Cube Functional System"
        style={{
          width: isFullScreen ? "80%" : "100%",
          height: isFullScreen ? "auto" : "auto",
          maxHeight: isFullScreen ? "none" : "auto",
          objectFit: isFullScreen ? "contain" : "cover",
          borderRadius: isFullScreen ? "0" : "2rem",
        }}
      />
    </div>


        <h5>The cubes</h5>
        <p>They represent different instruments: bass, drums, guitar, and piano. The six sides of each cube correspond to five different styles of playing loops for that instrument and a mute side.</p>
        <h5>The effectors' controller</h5>
        <p>The four physical interactive devices allow users to explore acoustic effects such as reverb/echo/equalization/BPM and gain a deeper understanding of these effects by interacting with the devices to change the sound field.</p>
        <h5>The LED Light</h5>
        <p>We designed LED lights for visual feedback. The LED lights change according to the volume of the music, thus enhancing the user's understanding of the music.</p>
        <br></br>
        <br></br>
        <h3>Prototype build</h3>
        <p>We used 3D printing technology to complete the prototype of six cubes and some other controllers, used LED light strips to make a light panel that can display the music spectrum, and made the base plate out of wood.</p>
        <p>In the realm of software, Arduino Programming were paramount. The code developed was the linchpin that integrated physical interactions with the digital world. It translated the manipulation of cubes and devices into MIDI signals, which interacted with Ableton Live to trigger audio loops and effects, thus animating the users' musical compositions.</p>
        <img
          src={PrototypeBuild}
          alt="Cube Prototype Build"
          width="100%"
          style={{ borderRadius: "2rem", marginBottom: "5vw" }}
        />
        <br></br>
        <h3>Final Prototype Display</h3>
        <p>After a semester-long hard work by our team, the final prototype was successfully produced.</p>
        <img
          src={FinalPrototype}
          alt="Cube Final Prototype"
          width="100%"
          style={{ borderRadius: "2rem", marginBottom: "5vw" }}
        />
        <br></br>
        <h4>Prototype demonstration</h4>
<YouTubeVideo videoId="4XCIFk3rID4"  autoplay="0"/>
<br></br>
<img
          src={FinalPrototypeFull}
          alt="Cube Final Prototype full"
          width="100%"
          style={{ borderRadius: "2rem", marginBottom: "5vw" }}
        />

 <h3>Team Behind the Project</h3>

 <p><strong>"Thank you, team, for all your hard work and contributions toward the final result."</strong></p>
 <p>From left to right they are: Zheheng Yang, Yue Jin, Guo Cheng, Qianqian Li, Thisura Senarath</p>
 <img
          src={TeamBehindTheProject}
          alt="Team Behind the Project"
          width="100%"
          style={{ borderRadius: "2rem", marginBottom: "5vw" }}
        />
       
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

export default CubeProjectWeb;

