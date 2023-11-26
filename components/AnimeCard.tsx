import Image from "next/image";
import { MotionDiv } from "./FramerMotion";
import Link from "next/link";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0.25 }}
      className="max-w-sm rounded relative w-full "
    >
      <Link href={`/animes/${anime.id}`} className="cursor-pointer group">
        <div className="relative rounded-xl w-full shadow-md min-h-[20rem] overflow-hidden group-hover:shadow-[#ff5956] transition-all duration-300">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            sizes="100%"
            className=""
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full group-hover:text-[#ff5956] transition-colors duration-300">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {anime.score}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default AnimeCard;
