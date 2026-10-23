import MainNews from "./components/MainNews";
import Marquee from "./components/Marquee";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  return (
    <div>
      <Marquee></Marquee>

      <div className="grid grid-cols-3 gap-4 max-w-7xl m-auto">
        <div className="col-span-2">
          <MainNews news={data}></MainNews>
          <div>
            { }
          </div>
        </div>
        <div className="col-span-1 bg-red-200">

        </div>

      </div>

    </div>
  );
}
