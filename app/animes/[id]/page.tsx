import { fetchAnimeDetails } from "@/app/action";
import { Metadata } from "next";

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
  };
}

export default async function AnimeDetailPage({
  params: { id },
}: AnimeDetailPageProps) {
  const data = await fetchAnimeDetails(id);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-5xl text-white font-bold red-gradient">
        {data.name}
      </h2>
    </main>
  );
}
