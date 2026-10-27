import Image from 'next/image';
import React from 'react';

const CategoryRelatedNews = async ({ params }) => {
    const { categoryId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json();
    const categoryWiseNews = data.data;
    console.log(categoryWiseNews)
    return (
        <>
            <div className="grid grid-cols-4 gap-3 mx-auto max-w-7xl bg-base-100 px-2 py-2 shadow-sm transition-shadow hover:shadow-md">
                {categoryWiseNews.map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow-sm gap-3 mt-2 items-center">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={400}

                            height={400}
                        />
                        <div className="card-body p-4">
                            <span className='text-sm font-bold badge text-red-500'>{item.category}</span>
                            <h2 className="text-base font-semibold leading-relaxed">{item.title}</h2>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )

};

export default CategoryRelatedNews;