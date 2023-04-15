import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section">
      <h2>동영상 섹션</h2>
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/1sTISOuNu1RGS-VtWVwf3ADr4bFsNNQTt/view?usp=share_link"
          title="video1"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
        <iframe
          src="https://drive.google.com/file/d/1sTISOuNu1RGS-VtWVwf3ADr4bFsNNQTt/view?usp=share_link"
          title="video2"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
        <iframe
          src="https://drive.google.com/file/d/1sTISOuNu1RGS-VtWVwf3ADr4bFsNNQTt/view?usp=sharing"
          title="video3"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;