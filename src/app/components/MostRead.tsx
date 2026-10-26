
const MostRead = async () => {
    const res =await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostReadNews = data.data;
    return (
        <div>
            {}
            
        </div>
    );
};

export default MostRead;