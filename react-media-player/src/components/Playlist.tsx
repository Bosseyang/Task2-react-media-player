import { type FC } from "react";
import SongCard from "./SongCard";

import type { ISong } from "../types";

export const Playlist: FC<{
  songs: ISong[];
  onSelect: (song: ISong) => void;
}> = ({ songs, onSelect }) => {
  return (
    <section className="section playlist-section" id="playlist-section">
      {songs.map((song) => (
        <div key={song.id} onClick={() => onSelect(song)}>
          <SongCard
            key={song.id}
            artist={song.artist}
            title={song.title}
            image={song.image}
            id={song.id}
          />
        </div>
      ))}
    </section>
  );
};
