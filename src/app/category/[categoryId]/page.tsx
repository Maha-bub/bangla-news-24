import Image from 'next/image';
import Link from 'next/link';

interface CategoryPageProps {
    params: Promise<{ categoryId: string }>;
}

interface NewsItem {
    id: string;
    imageUrl: string;
    title: string;
    category: string;
    description: string;
}

interface CategoryResponse {
    title: string;
    data: NewsItem[];
}

const CategoryRelatedNews = async ({ params }: CategoryPageProps) => {
    const { categoryId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data: CategoryResponse = await res.json();
    const categoryWiseNews = data.data;
    console.log(categoryWiseNews)
    return (

        <div>
            <h2 className='border-b-2 text-2xl font-bold  border-red-500 my-3'>{data.title}</h2>
            <div className="grid grid-cols-4 gap-3 mx-auto max-w-7xl bg-base-100 py-2">
                {categoryWiseNews.map(item => (
                    // <Link href={item.id} key={item.id}>
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
                    // </Link>
                )
                )}
            </div>
        </div>

    )

};

export default CategoryRelatedNews;