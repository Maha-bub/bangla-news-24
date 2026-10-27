import MainNews from "./components/MainNews";
import Marquee from "./components/Marquee";
import MostRead from "./components/MostRead";
import OthersNews from "./components/OthersNews";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const mainNews = data.data;


  const otherNewsItems = mainNews.slice(1);

  return (
    <div>
      <Marquee></Marquee>

      <div className="grid grid-cols-3 gap-4 max-w-7xl m-auto">
        <div className="col-span-2">
          <MainNews news={data}></MainNews>
          <OthersNews news={otherNewsItems}></OthersNews>

        </div>
        <div className="col-span-1">
          <MostRead></MostRead>

        </div>

      </div>

    </div>
  );
}
