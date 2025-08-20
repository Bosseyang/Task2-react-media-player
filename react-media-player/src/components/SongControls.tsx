import type { ReactElement } from "react";

export default function Controls(): ReactElement {
  return (
    <section className="controls">
      <span className="button repeat-button material-symbols-outlined">
        repeat
      </span>
      <div className="center-controls">
        <span className="button rewind-button material-symbols-outlined">
          fast_rewind
        </span>
        <span className="button play-button material-symbols-outlined">
          play_arrow
        </span>
        <span className="button forward-button material-symbols-outlined">
          fast_forward
        </span>
      </div>
      <span className="button shuffle-button material-symbols-outlined">
        shuffle
      </span>
    </section>
  );
}
