import type { ReactElement } from "react";
import SongInfo from "./SongPlaying";
import Controls from "./SongControls";
import ProgressBar from "./ProgressBar";

interface ISongDataProps {
  artist: string;
  title: string;
  image: string;
}

export default function SongSection(props: ISongDataProps): ReactElement {
  return (
    <section className="section song-section" id="song-section">
      <img src={props.image} alt={props.title} />
      <SongInfo title={props.title} artist={props.artist} />
      <ProgressBar playedTime={40} duration={220} />
      <Controls />
    </section>
  );
}
