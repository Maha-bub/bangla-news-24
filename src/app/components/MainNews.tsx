import Image from 'next/image';
import React from 'react';

const MainNews = async ({ news }) => {

    // console.log(news)
    const mainNews = news.data;


    // const mainNewsArray = mainNews.filter((item) => item.scrapable);
    // const mainNewsItem = mainNewsArray[0];
    const mainNewsItem = mainNews[0].articles[0];
    // console.log('First main news', mainNewsItem);


    const otherNewsItems = mainNews[0].articles.slice(1, 5);



    return (
        <div className="flex gap-3 items-jucenter stify-center">
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
                    <span className='text-black font-bold'>{mainNews.title}</span>
                    <h2 className="card-title">{mainNewsItem.title}</h2>
                    <p>{mainNewsItem.description}</p>
                </div>
            </div>

            <div className="grid gap-3">
                {otherNewsItems.map((item, index) => (
                    <div
                        key={item.id ?? item.title}
                        className="rounded-lg bg-base-100 px-2 pt-2 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <h2 className="text-base font-semibold leading-relaxed">
                            <span className="mr-2 font-bold text-black">
                                {index + 1}.
                            </span>
                            {item.title}
                        </h2>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MainNews;