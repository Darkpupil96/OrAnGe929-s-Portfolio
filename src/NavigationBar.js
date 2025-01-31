import Logo from "./logo2.png";
import Navigation from "./Navigation.tsx";
import Styles from './style.module.css';
import { useState, useEffect, useRef } from "react";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function NavigationBar({ClickSetVisible}) {
  const [selectedID, setSelectedID] = useState('#Home');
  const [shadow, setShadow] = useState(false);
 const [isNavVisible, setIsNavVisible] = useState(false); // 控制导航栏显示
  const sectionsRef = useRef({     // setting default current 
    '#Home': null,
    '#About': null,
    '#Portfolio': null,
    '#Skills': null,
    '#Contact': null
  });

  useEffect(() => {
    // set ref for each part 
    sectionsRef.current['#Home'] = document.getElementById('Home'); 
    sectionsRef.current['#About'] = document.getElementById('About');
    sectionsRef.current['#Portfolio'] = document.getElementById('Portfolio');
    sectionsRef.current['#Skills'] = document.getElementById('Skills');
    sectionsRef.current['#Contact'] = document.getElementById('Contact');

    const handleScroll = () => { // detect the current content and set the Selected ID 
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the screen   the scrollY property is an attribute of the window object, which represents the vertical position of the current window's scrollbar. Specifically, scrollY returns the number of pixels that the document has vertically scrolled from the top of the window.
      let selected = '';
      Object.keys(sectionsRef.current).forEach(key => {  // Object.keys(XXX) returns an array includes all the keys of sectionsRef.current
        const section = sectionsRef.current[key]; // setction  is the dom of the element
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {  // Determine whether the scrolling position is included in the page
          selected = key;  // set selected
        }
      });
      setSelectedID(selected);
      setShadow(scrollPosition > 100);

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setShadow(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);
  const handleMobileNavClick = () => {
    setIsNavVisible(!isNavVisible); // 切换导航栏显示状态
    
  if (!isNavVisible) {
    document.body.style.overflow = 'hidden'; // 禁止滚动
  } else {
    document.body.style.overflow = ''; // 恢复滚动
  }
  };
  // 添加窗口大小变化监听
  useEffect(() => {
    const handleResize = () => {
      setIsNavVisible(window.innerWidth >= 900); // 根据宽度动态设置导航栏显示状态
    };

    window.addEventListener('resize', handleResize);

    // 初始化时检查窗口大小
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MobileNavLinkClick=()=>{
    if(window.innerWidth<900)  // 如果是移动端，点击导航链接后隐藏导航栏
   setIsNavVisible(false);

    
  }
  return (
    <div>
    <div style={isNavVisible ? {display:'block'} : {display:'none'}}>
    <div className={shadow ? Styles.navbarShadow : Styles.navbar}>
      <div className={Styles.Logo}
           style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            paddingLeft:'5vw',
            width:'30%',
            height:'3vw',}}>
        <a href={'https://darkpupil96.github.io/OrAnGe929-s-Portfolio'}> <img src={Logo} alt='Logo' style={{width:'2.2vw', height:'2.2vw',paddingRight:'0.5vw'}}/></a>
        <a href={'https://darkpupil96.github.io/OrAnGe929-s-Portfolio'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{fontSize:'1.2vw'}}>
            <span style={{fontWeight:"bold"}}>OrAnGe</span>929
          </div>
        </a>
      </div>
      <div className={Styles.NavGap}></div>
      <Navigation MobileNavClick={MobileNavLinkClick} name={'Home'} link={'#Home'} selectedID={selectedID} ClickSetVisible={ClickSetVisible} />
      <Navigation MobileNavClick={MobileNavLinkClick} name={'About'} link={'#About'} selectedID={selectedID} ClickSetVisible={ClickSetVisible} />
      <Navigation MobileNavClick={MobileNavLinkClick} name={'Portfolio'} link={'#Portfolio'} selectedID={selectedID} ClickSetVisible={ClickSetVisible}  />
      <Navigation MobileNavClick={MobileNavLinkClick} name={'Skills'} link={'#Skills'} selectedID={selectedID} ClickSetVisible={ClickSetVisible} />
      <Navigation MobileNavClick={MobileNavLinkClick} name={'Contact'} link={'#Contact'} selectedID={selectedID} ClickSetVisible={ClickSetVisible}/>
    </div>
    </div>
    <div className={Styles.MobileNav} onClick={handleMobileNavClick}>
        <BsList style={isNavVisible?{display:'none'}:{display:'block'}} size={'6vw'} color='#46be0b'/>
        <IoMdClose style={isNavVisible?{display:'block'}:{display:'none'}} size={'6vw'} color='black'/>
        </div>
    </div>
  );
}

export default NavigationBar;
