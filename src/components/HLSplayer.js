import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Hls from 'hls.js';

const HLSPlayer = () => {
  const videoRef = useRef(null);
  const playlistUrl = 'http://localhost:80/stream.m3u8';

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(playlistUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(error => {
          // 자동 재생 실패 시 오류 처리
          console.error('Failed to play video:', error);
        });
      });
    } else if (video.canPlayType('application/x-mpegURL')) {
      video.src = playlistUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(error => {
          // 자동 재생 실패 시 오류 처리
          console.error('Failed to play video:', error);
        });
      });
    }

    return () => {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, []);

  return <video ref={videoRef} controls autoPlay muted />;
};

export default HLSPlayer; 