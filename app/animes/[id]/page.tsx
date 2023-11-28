import { fetchAnimeDetails } from "@/app/action";
import {
  MotionStaggerDiv,
  MotionDiv,
  MotionH2,
  MotionP,
} from "@/components/FramerMotion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { TypingText } from "@/components/CustomText";

type AnimeDetailPageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: AnimeDetailPageProps): Promise<Metadata> {
  const data = await fetchAnimeDetails(params.id);

  return {
    title: data.name,
    description: data.description,
    openGraph: {
      images: [`https://shikimori.one${data.image.original}`],
    },
  };
}

export default async function AnimeDetailPage({
  params: { id },
}: AnimeDetailPageProps) {
  const data = await fetchAnimeDetails(id);

  return (
    <MotionStaggerDiv className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 items-start justify-start">
          <h2>
            <span className="sr-only">{data.name}</span>
            <TypingText
              title={data.name}
              textStyles="leading-[120%] text-3xl md:text-5xl text-white font-bold red-gradient"
            />
          </h2>

          <MotionP
            variants={fadeIn("up", 25, "tween", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-sm -mt-2"
          >
            {data.released_on}
          </MotionP>

          <MotionDiv
            variants={fadeIn("up", 25, "tween", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex gap-4 items-center"
          >
            <p className="inline-block py-1 px-2 bg-[#161921] rounded-md text-white text-sm font-bold capitalize">
              {data.kind}
            </p>
            <p className="text-xl font-semibold capitalize">{data.status}</p>
          </MotionDiv>

          <MotionDiv
            variants={fadeIn("up", 25, "tween", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex gap-4 items-center"
          >
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">{data.episodes}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">{data.score}</p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={fadeIn("up", 25, "tween", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="mb-4">{data.description}</h3>
            <Link
              href={`https://shikimori.one${data.url}`}
              target="_blank"
              className="underline underline-offset-2 text-[#ff5956] hover:opacity-75 font-semibold"
            >
              More
            </Link>
          </MotionDiv>
        </div>

        <MotionDiv
          variants={fadeIn("left", 50, "tween", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex items-start justify-center"
        >
          <Image
            src={`https://shikimori.one${data.image.original}`}
            alt={data.name}
            width={256}
            height={256}
            priority
            objectFit="cover"
            objectPosition="center"
            className="shadow-md rounded-xl"
          />
        </MotionDiv>
      </div>
      <div className="pb-8" />

      <MotionDiv className="grid md:grid-cols-2 gap-8">
        {data.screenshots.map((screenshot, index) => (
          <MotionDiv
            variants={fadeIn("right", undefined, "tween", index * 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={`${data.name}-${index + 1}`}
            className="max-h-[30rem]"
          >
            <Image
              src={`https://shikimori.one${screenshot.original}`}
              alt={`${data.name}-${index + 1}`}
              width={480}
              height={480}
              priority
              objectFit="cover"
              objectPosition="center"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </MotionDiv>
        ))}
      </MotionDiv>
      <div className="pb-32 md:pb-16" />
    </MotionStaggerDiv>
  );
}
