import Image from 'next/image';
import Link from 'next/link';
interface NewsCardProps {
    news: {
        id: string;
        imageUrl: string;
        title: string;
        category: string;
        description: string;
    }
}

const NewsCard = ({ news }: NewsCardProps) => {
    return (
        <Link href={`news/${news.id}`}>

            <div key={news.id} className="card bg-base-100 shadow-sm gap-3 mt-2 items-center">
                <Image
                    src={news.imageUrl}
                    alt={news.title}
                    width={400}

                    height={400}
                />
                <div className="card-body p-4">
                    <span className='text-sm font-bold badge text-red-500'>{news.category}</span>
                    <h2 className="text-base font-semibold leading-relaxed">{news.title}</h2>
                    <p className="text-sm text-gray-600">{news.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;