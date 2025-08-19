import type { ReactElement } from "react";
import SongCard from "./songcard";
import { songs } from "../assets/songdata";

export default function Playlist(): ReactElement {
  return (
    <section className="section playlist-section" id="playlist-section">
      <div>
        {songs.map((song, index) => (
          <SongCard
            key={index}
            artist={song.artist}
            title={song.title}
            image={song.image}
          />
        ))}
      </div>
    </section>
  );
}
