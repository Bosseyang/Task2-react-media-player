import type { ReactElement } from "react";
import SecondsToMin from "./SecondsToMin";

interface IProgressBarProps {
  progresstime: number;
  trackLength: number;
}

export default function ProgressBar({
  progresstime,
  trackLength,
}: IProgressBarProps): ReactElement {
  return (
    <section className="section progressbar-section">
      <SecondsToMin time={progresstime} />
      <div className="progressbar">
        <div className="current-progress"></div>
      </div>
      <SecondsToMin time={trackLength} />
    </section>
  );
}
