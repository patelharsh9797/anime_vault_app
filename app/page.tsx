import { MotionH2 } from "@/components/FramerMotion";
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
  const data = await fetchAnime();

  return (
    <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <MotionH2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, ease: "easeInOut", duration: 0.5 }}
        className="text-3xl text-white font-bold"
      >
        Explore Anime
      </MotionH2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </div>
  );
}

export default Home;
