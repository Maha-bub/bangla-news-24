interface MostReadType {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    url: string,
    scrapable: boolean,
    category: string
}
const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostReadNews: MostReadType[] = data.data;
    console.log(mostReadNews, 'most read')
    return (
        <div className="rounded-lg card bg-base-100 px-2 py-2 shadow-sm transition-shadow hover:shadow-md">
            <p className='text-lg font-bold text-red-700'>{mostReadNews[0]?.category}</p>
            {mostReadNews.map((item, index) => (
                <div
                    key={item.id}
                    className=" bg-base-100 px-2 py-2 "
                >
                    <h2 className="text-base pb-2 mb-2 font-semibold leading-relaxed">
                       <span>{index + 1}.</span> {item.title}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default MostRead;