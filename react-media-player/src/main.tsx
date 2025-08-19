import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Header from "./components/header";
import Playlist from "./components/playlist";
import SongSection from "./components/songsection";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main className="main">
      <Playlist />
      <SongSection />
    </main>
  </StrictMode>
);
