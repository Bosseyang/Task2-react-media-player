export interface ISongData {
  artist: string;
  title: string;
  image: string;
  id: number;
  duration: number;
}
export type SongData = ISongData[];

export const songs: SongData = [
  {
    id: 1,
    artist: "A Rocket to the moon",
    title: "Like we used to",
    image: "/songImage/A_rocket_to_the_moon.jpg",
    duration: 220,
  },
  {
    id: 2,
    artist: "John Legend",
    title: "Save the room",
    image: "/songImage/Save_Room_John_Legend.jpg",
    duration: 220,
  },
  {
    id: 3,
    artist: "John Legend",
    title: "We just don't care",
    image: "/songImage/once_again.jpg",
    duration: 220,
  },
  {
    id: 4,
    artist: "A Rocket to the moon",
    title: "Dakota",
    image: "/songImage/A_rocket_to_the_moon.jpg",
    duration: 220,
  },
  {
    id: 5,
    artist: "Zedd & Aloe Blacc",
    title: "Candyman",
    image: "/songImage/candyman.jpg",
    duration: 220,
  },
  {
    id: 6,
    artist: "Rag'n'Bone Man",
    title: "Human",
    image: "/songImage/human.jpg",
    duration: 220,
  },
  {
    id: 7,
    artist: "Imagine Dragons",
    title: "Shots (Broiler Remix)",
    image: "/songImage/imagine_dragons_shots.jpg",
    duration: 220,
  },
  {
    id: 8,
    artist: "Imagine Dragons",
    title: "Demons",
    image: "/songImage/imagine_dragons_demons.jpg",
    duration: 220,
  },
];
