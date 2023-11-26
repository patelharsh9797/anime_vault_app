import { fetchAnimeDetails } from "@/app/action";

type AnimeDetailPageProps = {
  params: { id: string };
};

export default async function AnimeDetailPage({
  params: { id },
}: AnimeDetailPageProps) {
  const data = await fetchAnimeDetails(id);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="red-gradient">Anime Detail - {id}</h2>
    </main>
  );
}
