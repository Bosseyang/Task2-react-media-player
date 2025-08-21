import type { ReactElement } from "react";
import SecondsToMin from "./SecondsToMin";

interface IProgressBarProps {
  playedTime: number;
  duration: number;
}

export default function ProgressBar({
  playedTime,
  duration,
}: IProgressBarProps): ReactElement {
  return (
    <section className="section progressbar-section">
      <SecondsToMin time={playedTime} />
      <div className="progressbar">
        <div className="current-progress"></div>
      </div>
      <SecondsToMin time={duration} />
    </section>
  );
}
