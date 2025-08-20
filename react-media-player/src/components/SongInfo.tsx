import type { ReactElement } from "react";
// import type { ISongData } from "../assets/songdata";
interface ISongInfo {
  artist: string;
  title: string;
}

export default function SongInfo(props: ISongInfo): ReactElement {
  const { artist, title } = props;
  return (
    <section className="section songinfo-section">
      <span className="button add-button material-symbols-outlined">
        add_circle
      </span>
      <section className="song-title">
        <h1 className="songinfo-h1">{artist}</h1>
        <h2 className="songinfo-h2">{title}</h2>
      </section>
      <span className="button fav-button material-symbols-outlined">
        favorite
      </span>
    </section>
  );
}
