import Image from 'next/image';
import React from 'react';

const MainNews = async ({ news }) => {

    console.log(news)
    const mainNews = news.data;
    // const mainNewsArray = mainNews.filter((item) => item.scrapable);
    // const mainNewsItem = mainNewsArray[0];
    const mainNewsItem = mainNews[0].articles[0];
    const otherNewsItems = mainNews[0].articles.slice(1, 5);
    console.log(otherNewsItems)

    return (
        <div className="flex items-center justify-center">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={mainNewsItem.image}
                        alt="Shoes"
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
            <div className="grid gap-4">
                {otherNewsItems.map((item, index) => (
                    <div key={index} className="bg-base-100 shadow-sm">

                        <div className="card-body">
                            <h2 className="card-title"> <span className='text-black font-bold'>{index + 1}.</span>{item.title}</h2>
                            {/* <p>{item.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainNews;