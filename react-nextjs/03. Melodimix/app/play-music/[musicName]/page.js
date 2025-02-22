"use client";

import { useParams } from "next/navigation";
import { songs } from "@/src/db/songs";
import "@/src/css/play-music.css";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { musicName } = useParams();
  const music = musicName.replace(/%20/g, " ");
  const play = songs.find((song) => song.title === music);
  const audio = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    isPlaying ? (image.current.style.animationPlayState = "running") : (image.current.style.animationPlayState = "paused");

    audio.current.onplay = () => setIsPlaying(true);
    audio.current.onpause = () => setIsPlaying(false);
  }, [isPlaying]);

  return (
    <>
      <div className="container-music-player">
        <figure>
          <img
            ref={image}
            src={play?.thumbnail}
            alt={play?.artistName + " - " + play?.title}
            onClick={() => {
              if (!isPlaying) {
                audio.current.play();
                setIsPlaying(!isPlaying);
              } else if (isPlaying) {
                audio.current.pause();
                setIsPlaying(!isPlaying);
              }
            }}
          />
          <figcaption>{play?.artistName + " - " + play?.title}</figcaption>
        </figure>
        <div id="music-player">
          <audio controls ref={audio}>
            <source src={play?.urlStream} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </>
  );
}
