import { useState, type ReactElement } from "react";
import type { ISongData } from "../assets/songdata";

export default function SongCard(props: ISongData): ReactElement {
  const { artist, title, image, songId } = props;

  const [focus, setFocus] = useState(songId);

  const onFocus = () => {
    setFocus(songId);
    console.log(focus);
  };
  return (
    <section
      onClick={onFocus}
      className={`section songcard-section songId-${onFocus}`}
      key={songId}
    >
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
