import type { ReactElement } from "react";

export default function Controls(): ReactElement {
  return (
    <section className="controls">
      <div className="center-controls">
        <span className="button play-button material-symbols-outlined">
          play_arrow
        </span>
      </div>
    </section>
  );
}
