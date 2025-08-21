import { useState, type ReactElement } from "react";
import SongCard from "./SongCard";
import { songs } from "../assets/songdata";
// import type { ITrack } from "../types";

export default function Playlist(): ReactElement {
  // export const Playlist: React.FC<{
  //   songs: SongData[];
  //   onSelect: (track: SongData) => void;
  // }> = ({ songs, onSelect }) => {

  return (
    <section className="section playlist-section" id="playlist-section">
      <div>
        {songs.map((song) => (
          <SongCard
            key={song.songId}
            artist={song.artist}
            title={song.title}
            image={song.image}
            songId={song.songId}
          />
        ))}
      </div>
    </section>
  );
}
