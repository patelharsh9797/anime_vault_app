"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

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

  return data;
};
