"use client";
import { PlayCircleFill, Search } from "react-bootstrap-icons";
import { songs } from "../src/db/songs.js";
import Link from "next/link.js";
import "../src/css/home.css";

export default function App() {
  return (
    <>
      <div id="home-music-search">
        <form>
          <label htmlFor="search-music">
            <Search id="search-icon" />
            <input type="text" name="searchMusic" id="search-music" placeholder="Cari Musik..." />
          </label>
        </form>
      </div>
      {songs?.map((song, i) => (
        <div className="music-container" key={"music-" + i++}>
          <Link href={`play-music/${song?.title}`}>
            <img src={song?.thumbnail} alt={`${song?.artistName} - ${song?.title}`} />
            <PlayCircleFill className="music-container-play-icon" />
            <h2>{song?.artistName}</h2>
            <p>{song?.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
