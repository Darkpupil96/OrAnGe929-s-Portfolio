import React from 'react';
import Styles from './style.module.css';

const ThreeCard = ({ imageSrc, targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target ID
        }
  };

  return (
    <div className={Styles.ThreeCard} onClick={handleClick} style={{ cursor: 'pointer', display: 'inline-block' }}>
      <img 
        src={imageSrc} 
        alt="Three Card" 
        style={{
          width: '80%',
          height: 'auto',
          borderRadius: '12px', // 添加倒角
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
        }}
      />
    </div>
  );
};

export default ThreeCard;



