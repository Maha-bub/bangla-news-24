import Image from 'next/image';
import React from 'react';

const NewsDetailedPage = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app//api/article/${newsId}`)
    const data = await res.json();
    console.log(data, 'news detailed page')
    return (
        <div>
            <h2 className='border-b-2 text-2xl font-bold  border-red-500 my-3'>{data.title}</h2>
            {/* news Image */}
            <Image
                src={data.imageUrl}
                alt={data.title}
                width={400}
                height={400}
            />
            {/* news description */}

            <p className="text-lg text-gray-700">{data.description}</p>

        </div>
    );
};

export default NewsDetailedPage;