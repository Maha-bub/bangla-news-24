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
        <div>
            <p className='text-sm font-bold text-red-500'>{mostReadNews[0]?.category}</p>
            {mostReadNews.map((item) => (
                <div
                    key={item.id}
                    className="rounded-lg bg-base-100 px-2 pt-2 shadow-sm transition-shadow hover:shadow-md"
                >
                    <h2 className="text-base font-semibold leading-relaxed">
                        {item.title}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default MostRead;