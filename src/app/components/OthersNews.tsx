'use client'
import Image from "next/image";

interface OthersNewsProps {
    news: {
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
        }
    }
}
const OthersNews = ({ news }: OthersNewsProps) => {
    const othersNews = news
    const othersNewsArticles = othersNews.map((item) => item.articles);
    console.log('jhgfghkjhg', othersNewsArticles)
    return (
        <>
            {othersNews.map((item) => (
                <div key={item.id} className="bg-base-100 px-2 pt-2 shadow-sm transition-shadow hover:shadow-md">
                    <h2 className='border-b-2 text-2xl font-bold border-red-500 my-3'>{item.title}</h2>
                    <div className="grid grid-cols-3 gap-3">
                        {(item.articles || []).map((article) => (
                            <div key={article.id} className="gap-3 mt-2 items-center">
                                <Image
                                    src={article.imageUrl}
                                    alt={article.title}
                                    width={400}

                                    height={400}
                                />
                                <div>
                                    <h2 className="text-base font-semibold leading-relaxed">{article.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </>
    );

};

export default OthersNews;