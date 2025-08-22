import SongInfo from "./SongPlaying";
import Controls from "./SongControls";
import ProgressBar from "./ProgressBar";

interface ISongDataProps {
  artist: string;
  title: string;
  image: string;
  duration: number;
}

export const SongSection: React.FC<{ song: ISongDataProps | null }> = ({
  song,
}) => {
  if (!song)
    return (
      //Can style this better eventually
      <section className="section song-section" id="song-section">
        <h1 className="h1 song-section-h1">
          Select a song from the list to play
        </h1>
        <span className="note-icon material-symbols-outlined">genres</span>
      </section>
    );

  return (
    <section className="section song-section" id="song-section">
      <div className="song-section image-container">
        <img src={song.image} alt={song.title} />
      </div>
      <SongInfo title={song.title} artist={song.artist} />
      <ProgressBar playedTime={40} duration={song.duration} />
      <Controls />
    </section>
  );
};
