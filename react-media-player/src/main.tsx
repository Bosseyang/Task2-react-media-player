import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Header from "./components/Header";
import { Playlist } from "./components/Playlist";
import { SongSection } from "./components/SongSection";
import { songs, type ISongData } from "./assets/songdata";

function App() {
  const [selectedSong, setSelectedSong] = useState<ISongData | null>(null);

  return (
    <>
      <Header />
      <main className="main">
        <Playlist songs={songs} onSelect={setSelectedSong} />
        <SongSection song={selectedSong} />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
