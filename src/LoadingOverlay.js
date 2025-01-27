import React from 'react';
import loadingImage from './loading.gif'; // 确保正确引入图片

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img
          src={loadingImage} // 确保路径正确
          alt="Loading..."
          style={{
            width: '80px',
            height: '80px',
            animation: 'spin 1.5s linear infinite',
          }}
        />
        <p style={{ marginTop: '1rem', color: '#333', fontSize: '1.2rem' }}>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
