import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface HeadlinesType {
    id: number,
    title: string
}
const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const resData = await res.json();
    const headlines: HeadlinesType = resData.data;
    return (
        <div className="bg-red-700 container" >
            <div className="flex  max-w-7xl m-auto">
                <div className="bg-red-800 text-white py-1 px-3" >সর্বশেষ </div>
                <MarqueeText direction="right" duration={10}>

                    <div className="bg-red-700 text-white py-1">
                        {headlines.map(headline => <span key={headline.id}>
                            <span>{headline.title}</span>
                            <span className='mx-5'>ㆍ</span>
                        </span>)
                        }

                    </div>

                </MarqueeText>

            </div >
        </div>
    );
};

export default Marquee;