import { useState, type ReactElement } from "react";
import SongCard from "./SongCard";
import { songs, type SongData } from "../assets/songdata";
import type { ISong } from "../types";

export default function Playlist(): ReactElement {
  // export const Playlist: React.FC<{
  //   songs: ISong[];
  //   onSelect: (song: ISong) => void;
  // }> = ({ songs, onSelect }) => {

  return (
    <section className="section playlist-section" id="playlist-section">
      {songs.map((song) => (
        // <div onClick={() => onselect(song)}>
        <SongCard
          key={song.songId}
          artist={song.artist}
          title={song.title}
          image={song.image}
          songId={song.songId}
        />
        // </div>
      ))}
    </section>
  );
}
