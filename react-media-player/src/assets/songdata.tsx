export interface ISongData {
  artist: string;
  title: string;
  image: string;
  songId: number;
}
export type SongData = ISongData[];

export const songs: SongData = [
  {
    songId: 1,
    artist: "A Rocket to the moon",
    title: "Like we used to",
    image: "/songImage/A_rocket_to_the_moon.jpg",
  },
  {
    songId: 2,
    artist: "John Legend",
    title: "Save the room",
    image: "/songImage/Save_Room_John_Legend.jpg",
  },
  {
    songId: 3,
    artist: "John Legend",
    title: "We just don't care",
    image: "/songImage/once_again.jpg",
  },
  {
    songId: 4,
    artist: "A Rocket to the moon",
    title: "Dakota",
    image: "/songImage/A_rocket_to_the_moon.jpg",
  },
  {
    songId: 5,
    artist: "Zedd & Aloe Blacc",
    title: "Candyman",
    image: "/songImage/candyman.jpg",
  },
  {
    songId: 6,
    artist: "Rag'n'Bone Man",
    title: "Human",
    image: "/songImage/human.jpg",
  },
];
