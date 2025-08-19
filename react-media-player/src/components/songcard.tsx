import type { ReactElement } from "react";
interface ISongCardProps {
  artist: string;
  title: string;
  image: string;
}

export default function SongCard(props: ISongCardProps): ReactElement {
  const { artist, title, image } = props;
  return (
    <section className="section songcard-section" id="song1">
      <img className="songcard-img" src={image} alt={title} />
      <section className="section song-title">
        <h1 className="song-h1">{artist}</h1>
        <h2 className="song-h2">{title}</h2>
      </section>
      <span className="play-button material-symbols-outlined">play_arrow</span>
    </section>
  );
}
