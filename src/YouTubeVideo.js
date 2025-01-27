import React from "react";

const YouTubeVideo = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0`;

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
      
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
