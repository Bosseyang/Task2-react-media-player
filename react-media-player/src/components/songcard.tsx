import type { ReactElement } from "react";
import type { ISongData } from "../assets/songdata";

export default function SongCard(props: ISongData): ReactElement {
  const { artist, title, image, songId } = props;
  return (
    <section className="section songcard-section" id={songId}>
      <img className="songcard-img" src={image} alt={title} />
      <section className="section song-title">
        <h1 className="song-h1">{artist}</h1>
        <h2 className="song-h2">{title}</h2>
      </section>
      <span className="button play-button material-symbols-outlined">
        play_arrow
      </span>
    </section>
  );
}
