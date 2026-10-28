import Image from "next/image";

interface NewsDetailedPageProps {
    params: Promise<{ newsId: string }>;
}

interface NewsBlock {
    type?: string;
    text?: string;
    model?: {
        blocks?: NewsBlock[];
        text?: string;
    };
    blocks?: NewsBlock[];
}

interface NewsTopic {
    id: string;
    name: string;
}

interface NewsData {
    id: string;
    title: string;
    description: {
        blocks?: NewsBlock[];
    } | string;
    body: NewsBlock[];
    imageUrl?: string;
    source?: string;
    firstPublished?: string;
    link?: string;
    topics?: NewsTopic[];
}

// Extract text from nested API blocks
const extractText = (blocks: NewsBlock[] = []): string => {
    return blocks
        .map((block) => {
            if (block.text) {
                return block.text;
            }

            if (block.model?.text) {
                return block.model.text;
            }

            if (block.model?.blocks) {
                return extractText(block.model.blocks);
            }

            if (block.blocks) {
                return extractText(block.blocks);
            }

            return "";
        })
        .filter(Boolean)
        .join("\n\n");
};

const NewsDetailedPage = async ({
    params,
}: NewsDetailedPageProps) => {
    const { newsId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`,
        {
            next: {
                revalidate: 300,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch news details");
    }

    const data = await res.json();
    const newsData: NewsData = data.data;

    const description =
        typeof newsData.description === "string"
            ? newsData.description
            : extractText(newsData.description?.blocks);

    return (
        <main className="mx-auto max-w-4xl px-4 py-6">

            {/* News Title */}
            <h1 className="my-4 border-b-2 border-red-500 pb-3 text-2xl font-bold leading-relaxed md:text-3xl">
                {newsData.title}
            </h1>

            {/* News Image */}
            {newsData.imageUrl && (
                <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src={newsData.imageUrl}
                        alt={newsData.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 896px"
                        className="object-cover"
                    />
                </div>
            )}

            {/* Source and Published Date */}
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                {newsData.source && (
                    <span className="font-semibold text-red-600">
                        {newsData.source}
                    </span>
                )}

                {newsData.firstPublished && (
                    <time dateTime={newsData.firstPublished}>
                        {new Date(
                            newsData.firstPublished
                        ).toLocaleDateString("bn-BD", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                )}
            </div>

            {/* News Description */}
            {description && (
                <div className="mb-6 border-l-4 border-red-500 bg-gray-50 p-4 text-lg font-medium leading-8 text-gray-800">
                    {description}
                </div>
            )}

            {/* Full News Body */}
            <article className="space-y-5 text-justify text-base leading-8 text-gray-700">
                {newsData.body?.map((block, index) => {
                    const text =
                        block.text ||
                        block.model?.text ||
                        extractText(
                            block.model?.blocks ??
                            block.blocks ??
                            []
                        );

                    if (!text.trim()) {
                        return null;
                    }

                    if (
                        block.type === "heading" ||
                        block.type === "title" ||
                        block.type === "subheading"
                    ) {
                        return (
                            <h2
                                key={index}
                                className="pt-3 text-xl font-bold leading-relaxed text-gray-900 md:text-2xl"
                            >
                                {text}
                            </h2>
                        );
                    }

                    return (
                        <p key={index}>
                            {text}
                        </p>
                    );
                })}
            </article>

            {/* Original News Link */}
            {newsData.link && (
                <div className="mt-8">
                    <a
                        href={newsData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                        মূল সংবাদ পড়ুন ↗
                    </a>
                </div>
            )}

            {/* News Topics / Tags */}
            {newsData.topics && newsData.topics.length > 0 && (
                <div className="mt-8 border-t border-gray-200 pt-5">
                    <h2 className="mb-4 text-lg font-bold text-gray-800">
                        সম্পর্কিত বিষয়
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {newsData.topics.map((topic) => (
                            <span
                                key={topic.id}
                                className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
                            >
                                #{topic.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

        </main>
    );
};

export default NewsDetailedPage;