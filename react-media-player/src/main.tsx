import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import SongSection from "./components/SongSection";
// const [selectedTrack, setSelectedTrack] = useState<ITrack | null>(null);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main className="main">
      <Playlist />
      <SongSection
        image="/songImage/A_rocket_to_the_moon.jpg"
        title="Like we used to"
        artist="A Rocket to the moon"
      />
    </main>
  </StrictMode>
);
