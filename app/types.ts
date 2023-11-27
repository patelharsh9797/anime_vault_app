export type AnimeDetailsType = {
  id: number;
  name: string;
  kind: string;
  url: string;
  image: { original: string };
  score: string;
  status: string;
  episodes: number;
  released_on: string;
  description: string;
  screenshots: { original: string }[];
};
