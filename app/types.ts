export type AnimeDetailsType = {
  id: number;
  name: string;
  url: string;
  image: { original: string };
  score: string;
  status: string;
  episodes: number;
  released_on: string;
  description: string;
  screenshots: { original: string }[];
};
