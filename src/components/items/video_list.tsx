import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/ContentVideo.module.scss";

interface VideoProps {
  data: {
    meta?: {
      playtime_seconds?: number;
    };
    file_url: string;
    thumb_url?: string;
  };
}

function VideoList({ data }: VideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState<boolean>(false);
  const videoTime: number = data.meta?.playtime_seconds || 0;

  const handleShowControls = (): void => {
    setShowControls(true);
  };

  const handlePauseVideo = (): void => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: "0px",
      threshold: [0.7, 0.75],
    };

    const handlePlay = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
          }
        }
      });
    };

    let playPromise: Promise<void> | undefined = videoRef.current?.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          const observer: IntersectionObserver = new IntersectionObserver(
            handlePlay,
            options
          );
          if (videoRef.current) {
            observer.observe(videoRef.current);
          }
        })
        .catch((err) => {
          return;
        });
    }
  }, []);

  return (
    <video
      className={videoTime < 30 ? styles.video_short : ""}
      controls={showControls}
      src={data.file_url}
      ref={videoRef}
      disablePictureInPicture
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
      onMouseEnter={handleShowControls}
      poster={data.thumb_url || ""}
      onClick={handlePauseVideo}
      loop
      //autoPlay
      playsInline
    />
  );
}

export default VideoList;