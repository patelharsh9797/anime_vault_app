"use server";

export const fetchAnime = async (page: number = 1) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();

  return data;
};
