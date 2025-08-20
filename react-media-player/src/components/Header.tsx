import type { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="header-button">
          <span className="button material-symbols-outlined">
            arrow_back_ios
          </span>
        </a>
        <h1 className="header-h1">Playlist - Moody</h1>
        <a href="" className="header-button">
          <span className="button material-symbols-outlined">more_vert</span>
        </a>
      </nav>
    </header>
  );
}
