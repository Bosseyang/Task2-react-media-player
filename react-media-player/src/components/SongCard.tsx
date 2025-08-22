import { type ReactElement } from "react";

interface ISongCardInfo {
  artist: string;
  title: string;
  image: string;
  id: number;
}

export default function SongCard(props: ISongCardInfo): ReactElement {
  const { artist, title, image, id } = props;

  return (
    <section className={`section songcard-section`} key={id}>
      <img className="songcard-img" src={image} alt={title} />
      <section className="section song-title">
        <h1 className="song-h1">{artist}</h1>
        <h2 className="song-h2">{title}</h2>
      </section>
      <span className={`button play-button material-symbols-outlined`}>
        play_arrow
      </span>
    </section>
  );
}
