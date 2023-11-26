"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { notFound } from "next/navigation";
import { AnimeDetailsType } from "./types";

export const fetchAnime = async (page: number = 1) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const fetchAnimeDetails = async (id: string) => {
  const res = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = await res.json();

  if (data.code === 404) {
    return notFound();
  }

  return {
    id: data.id,
    name: data.name,
    image: data.image,
    description: data.description,
    episodes: data.episodes,
    released_on: data.released_on,
    score: data.score,
    screenshots: data.screenshots,
    status: data.status,
    url: data.url,
  } as AnimeDetailsType;
};
