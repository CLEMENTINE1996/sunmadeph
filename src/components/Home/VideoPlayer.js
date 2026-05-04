"use client";

import React, { useRef, useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { prefix } from "@/src/utils";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal"

const mockData = [
  { 
    type: 'VIDEO', 
    src: '/videos/vid-1.mp4' 
  },
  { 
    type: 'VIDEO', 
    src: '/videos/vid-2.mp4' 
  }
];

const VideoSlide = ({ url, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.load(); 
      const timer = setTimeout(() => {
        video.play().catch(() => console.log("Playback interrupted"));
      }, 150);
      return () => clearTimeout(timer);
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <Fade direction="up" duration={1000} triggerOnce>
    <div className="relative aspect-video w-full bg-black flex items-center justify-center rounded-lg overflow-hidden">
      <video ref={videoRef} src={url} muted playsInline controls className="w-full h-full object-contain" />
    </div>
    </Fade>
  );
};

const VideoPlayer = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 sxl:px-32 flex flex-col items-center justify-center">
    <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-4">Videos</h2>

      <div className="w-full bg-white dark:bg-zinc-900 rounded-xl p-4">
        <Carousel
          showThumbs={true}
          showStatus={true}
          infiniteLoop={true}
          showIndicators={false}
          selectedItem={activeIndex}
          showArrows={false}
          onChange={(index) => setActiveIndex(index)}
          renderThumbs={() =>
            mockData.map((el, i) => (
              <div 
                key={i} 
                style={{
                  border: activeIndex === i ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  height: '50px',
                  opacity: activeIndex === i ? 1 : 0.6,
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
              >
                {el.type === 'IMAGE' ? (
                  <img src={`${prefix}${el.src}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ background: '#18181b', color: 'white', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                    VIDEO
                  </div>
                )}
              </div>
            ))
          }
        >
          {mockData.map((el, i) => (
            <article key={i} className="relative w-full pb-2"> {/* pb-14 gives room for thumbnails */}
              {el.type === 'IMAGE' ? (
                <img src={`${prefix}${el.src}`} alt={`Slide ${i}`} className="w-full rounded-lg h-auto object-cover" />
              ) : (
                <VideoSlide url={`${prefix}${el.src}`} isPlaying={activeIndex === i} />
              )}
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default VideoPlayer;