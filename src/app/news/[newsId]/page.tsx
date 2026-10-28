import React from 'react';

const NewsDetailedPage = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app//api/article/${newsId}`)
    const data = await res.json();
    console.log(data, 'news detailed page')
    return (
        <div>
            NewsId detailed page
        </div>
    );
};

export default NewsDetailedPage;