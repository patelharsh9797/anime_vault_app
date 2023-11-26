"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";
import { fetchAnime } from "@/app/action";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setdata] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setdata((prev) => [...prev, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
