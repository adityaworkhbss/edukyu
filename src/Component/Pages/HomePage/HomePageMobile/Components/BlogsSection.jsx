import React from 'react';

const BlogCard = ({ author, date, title, imageSrc }) => {
    return (
        <article className="flex-1">
            <div className="bg-[rgba(205,205,205,1)] flex min-h-[110px] max-w-full w-[152px] rounded-2xl" />
            <div className="w-full mt-4">
                <div className="flex w-full flex-col text-xs text-[rgba(112,112,112,1)] font-medium">
                    <div className="flex items-center gap-3 whitespace-nowrap tracking-[0.3px] leading-none">
                        <div className="self-stretch flex items-center gap-2 my-auto">
                            <div className="self-stretch my-auto">{author}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 tracking-[0.3px] leading-none mt-2">
                        <div className="self-stretch my-auto">{date}</div>
                    </div>
                    <h3 className="text-[rgba(18,18,18,1)] text-base self-stretch mt-2">
                        {title}
                    </h3>
                </div>
                <div className="flex w-full items-center gap-[29px] text-sm text-[rgba(155,155,155,1)] font-semibold tracking-[1px] leading-none justify-between mt-6">
                    <button className="self-stretch my-auto hover:text-[#679EA4] transition-colors">
                        READ MORE
                    </button>
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/805c84b470a32709b5f187ba3c24fdb0f811672a?placeholderIfAbsent=true"
                        alt="Read more arrow"
                        className="aspect-[1] object-contain w-[34px] self-stretch shrink-0 my-auto"
                    />
                </div>
            </div>
        </article>
    );
};

export const BlogSection = () => {
    return (
        <section className="mt-12">
            <h2 className="w-full max-w-[321px] text-xl text-[#181D27] font-semibold">
                Our Blogs
            </h2>
            <p className="text-[#535862] text-base font-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            <div className="flex w-full max-w-xs items-stretch gap-4 mt-5">
                <BlogCard
                    author="Shivani"
                    date="June 29, 2025"
                    title="Jamia Millia Islamia Distance Online Courses: Admission, Fees, and Benefits 2025"
                    imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/805c84b470a32709b5f187ba3c24fdb0f811672a?placeholderIfAbsent=true"
                />
                <BlogCard
                    author="Shivani"
                    date="June 29, 2025"
                    title="Jamia Millia Islamia Distance Online Courses: Admission, Fees, and Benefits 2025"
                    imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/805c84b470a32709b5f187ba3c24fdb0f811672a?placeholderIfAbsent=true"
                />
            </div>
        </section>
    );
};
