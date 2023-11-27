import { fetchAnimeDetails } from "@/app/action";
import { MotionDiv, MotionH2 } from "@/components/FramerMotion";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

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
    <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <MotionDiv className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 items-start justify-start">
          <MotionH2 className="text-3xl md:text-5xl text-white font-bold red-gradient leading-[120%]">
            {data.name}
          </MotionH2>

          <p className="text-sm -mt-4">{data.released_on}</p>

          <div className="flex gap-4 items-center">
            <p className="inline-block py-1 px-2 bg-[#161921] rounded-md text-white text-sm font-bold capitalize">
              {data.kind}
            </p>
            <p className="text-xl font-semibold capitalize">{data.status}</p>
          </div>

          <div className="flex gap-4 items-center">
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
          </div>

          <Link
            href={`https://shikimori.one${data.url}`}
            className="underline underline-offset-2 text-[#ff5956] hover:opacity-75 font-semibold"
          >
            More
          </Link>

          <h3>{data.description}</h3>
        </div>

        <div className="flex items-start justify-center">
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
        </div>
      </MotionDiv>
      <div className="pb-8" />

      <MotionDiv className="grid md:grid-cols-2 gap-8">
        {data.screenshots.map((screenshot, index) => (
          <div key={`${data.name}-${index + 1}`} className="">
            <Image
              src={`https://shikimori.one${screenshot.original}`}
              alt={`${data.name}-${index + 1}`}
              width={480}
              height={480}
              priority
              objectFit="cover"
              objectPosition="center"
              className="w-full h-full rounded-xl shadow-md"
            />
          </div>
        ))}
      </MotionDiv>
      <div className="pb-32 md:pb-16" />
    </div>
  );
}
