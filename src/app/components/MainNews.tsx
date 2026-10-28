import Image from 'next/image';
import Link from 'next/link';
interface MainNewsType {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    url: string,
    scrapable: boolean,
    articles: {
        id: number,
        title: string,
        description: string,
        imageUrl: string,
        url: string,
        scrapable: boolean,
        category: string
    }[]
}

const MainNews = async ({ news }: { news: { data: MainNewsType[] } }) => {

    // console.log(news)
    const mainNews = news.data;

    const mainNewsItem = mainNews[0].articles[0];
    const othersMainNewsArticles = mainNews[0].articles.slice(1, 5);
    // console.log("skip first news", othersMainNewsArticles)

    return (
        <div>
            <div className="flex gap-3 items-jucenter stify-center">
                <Link href={`news/${mainNewsItem.id}`}>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <Image
                                src={mainNewsItem.imageUrl}
                                alt="imageAlt"
                                width={500}
                                height={300}
                            />
                        </figure>
                        <div className="card-body">
                            <span className='text-sm font-bold badge text-red-500'>{mainNewsItem.category}</span>
                            <h2 className="card-title">{mainNewsItem.title}</h2>
                            <p>{mainNewsItem.description}</p>
                        </div>
                    </div>
                </Link>

                <div className="grid gap-3">
                    {othersMainNewsArticles.map((item, index) => (
                        <Link href={`news/${item.id}`} key={item.id}>
                            <div
                                key={item.id ?? item.title}
                                className="rounded-lg bg-base-100 px-2 pt-2 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <span className='text-sm font-bold badge text-red-500'>{item.category}</span>
                                <h2 className="text-base font-semibold leading-relaxed">
                                    <span className="mr-2 font-bold text-black">
                                        {index + 1}.
                                    </span>
                                    {item.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MainNews;