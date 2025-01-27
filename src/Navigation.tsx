import React, { useEffect, useState } from 'react';
import Styles from './style.module.css';

interface NavItem {
  name: string; // The title text of the navigation item
  link: string; // the link to 
  selectedID: string; // The ID of the currently selected navigation item, used to determine whether the item is selected
  
  ClickSetVisible:(link: string)=>void; // callback function to handle the click event, set the visibility of the mobile navigation
  MobileNavClick:()=>void;
}

function Navigation({ name, link, selectedID, ClickSetVisible,MobileNavClick }: NavItem) {
  const [isChosen, setIsChosen] = useState(false); // Set the chosen one

  useEffect(() => {
    setIsChosen(selectedID === link);
  }, [selectedID, link]);

  const handleClick = () => {
    
 
    ClickSetVisible(link);
  };

  return (
    <div className={isChosen ? Styles.Selected : Styles.Unselected}>
      <a className={Styles.navLink} href={link} onClick={()=>{handleClick();MobileNavClick()}}>
        {name}
      </a>
      <div className={Styles.navChosen}></div>
    </div>
  );
}

export default Navigation;
