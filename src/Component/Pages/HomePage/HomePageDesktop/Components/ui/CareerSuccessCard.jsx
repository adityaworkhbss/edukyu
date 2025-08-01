import Image from "next/image";
import testimonial_image from "@/../public/Resources/Images/testimonial_photo.png";
import graduate from "@/../public/Resources/Images/GraduateBanner.png"

const CareerSuccessCard = () => {
    return (
        <div className="bg-[#024B53] text-white rounded-[24px] p-6 flex gap-8 items-start flex-col">
            {/* Left Section */}
            <div className="flex flex-row items-start gap-[50px] justify-between">
                <div className="flex flex-row items-center gap-4">
                    <Image
                        src={testimonial_image}
                        alt="Pooja Sarkar"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <div className="text-[20px] font-[600] font-[Outfit] leading-[normal]" style={{ color: 'var(--Colour-Secondary-Colours-Mustard---400, #FFD23F)' }}>
                            Pooja Sarkar
                        </div>

                        <div className="text-white text-[14px] font-[400] leading-[20px] font-[Outfit] lowercase">
                            Billing and Account Executive
                        </div>

                        {/* Icons */}
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-[28px] h-[28px] flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 2.5C15.663 2.5 16.2989 2.76339 16.7678 3.23223C17.2366 3.70107 17.5 4.33696 17.5 5V15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5H5C4.33696 17.5 3.70107 17.2366 3.23223 16.7678C2.76339 16.2989 2.5 15.663 2.5 15V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H15ZM15 4.16667H5C4.77899 4.16667 4.56702 4.25446 4.41074 4.41074C4.25446 4.56702 4.16667 4.77899 4.16667 5V15C4.16667 15.221 4.25446 15.433 4.41074 15.5893C4.56702 15.7455 4.77899 15.8333 5 15.8333H15C15.221 15.8333 15.433 15.7455 15.5893 15.5893C15.7455 15.433 15.8333 15.221 15.8333 15V5C15.8333 4.77899 15.7455 4.56702 15.5893 4.41074C15.433 4.25446 15.221 4.16667 15 4.16667ZM6.66667 8.33333C6.87078 8.33336 7.06778 8.4083 7.22031 8.54393C7.37284 8.67956 7.47029 8.86646 7.49417 9.06917L7.5 9.16667V13.3333C7.49976 13.5457 7.41843 13.75 7.27263 13.9045C7.12682 14.0589 6.92754 14.1519 6.7155 14.1643C6.50347 14.1768 6.29468 14.1078 6.13181 13.9714C5.96893 13.8351 5.86425 13.6417 5.83917 13.4308L5.83333 13.3333V9.16667C5.83333 8.94565 5.92113 8.73369 6.07741 8.57741C6.23369 8.42113 6.44565 8.33333 6.66667 8.33333ZM9.16667 7.5C9.36183 7.49997 9.55081 7.56844 9.70066 7.69347C9.85052 7.8185 9.95173 7.99216 9.98667 8.18417C10.1545 8.08723 10.3279 8.00014 10.5058 7.92333C11.0617 7.68583 11.8942 7.555 12.6458 7.79083C13.04 7.91583 13.4358 8.14917 13.7292 8.54667C13.9917 8.90083 14.1333 9.33167 14.1617 9.81583L14.1667 10V13.3333C14.1664 13.5457 14.0851 13.75 13.9393 13.9045C13.7935 14.0589 13.5942 14.1519 13.3822 14.1643C13.1701 14.1768 12.9614 14.1078 12.7985 13.9714C12.6356 13.8351 12.5309 13.6417 12.5058 13.4308L12.5 13.3333V10C12.5 9.725 12.4333 9.59667 12.39 9.5375C12.3277 9.46022 12.242 9.40524 12.1458 9.38083C11.8558 9.28917 11.4383 9.3375 11.1608 9.45583C10.7442 9.63417 10.3625 9.91417 10.1025 10.1733L10 10.2833V13.3333C9.99976 13.5457 9.91843 13.75 9.77263 13.9045C9.62682 14.0589 9.42754 14.1519 9.2155 14.1643C9.00347 14.1768 8.79468 14.1078 8.63181 13.9714C8.46893 13.8351 8.36425 13.6417 8.33917 13.4308L8.33333 13.3333V8.33333C8.33333 8.11232 8.42113 7.90036 8.57741 7.74408C8.73369 7.5878 8.94565 7.5 9.16667 7.5ZM6.66667 5.83333C6.88768 5.83333 7.09964 5.92113 7.25592 6.07741C7.4122 6.23369 7.5 6.44565 7.5 6.66667C7.5 6.88768 7.4122 7.09964 7.25592 7.25592C7.09964 7.4122 6.88768 7.5 6.66667 7.5C6.44565 7.5 6.23369 7.4122 6.07741 7.25592C5.92113 7.09964 5.83333 6.88768 5.83333 6.66667C5.83333 6.44565 5.92113 6.23369 6.07741 6.07741C6.23369 5.92113 6.44565 5.83333 6.66667 5.83333Z" fill="white"/>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-[28px] h-[28px] flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.4974 1.66675H13.4974C16.1641 1.66675 18.3307 3.83341 18.3307 6.50008V13.5001C18.3307 14.782 17.8215 16.0113 16.9151 16.9178C16.0086 17.8242 14.7793 18.3334 13.4974 18.3334H6.4974C3.83073 18.3334 1.66406 16.1667 1.66406 13.5001V6.50008C1.66406 5.2182 2.17329 3.98882 3.07971 3.0824C3.98614 2.17597 5.21552 1.66675 6.4974 1.66675ZM6.33073 3.33341C5.53508 3.33341 4.77202 3.64948 4.20941 4.21209C3.6468 4.7747 3.33073 5.53776 3.33073 6.33341V13.6667C3.33073 15.3251 4.67239 16.6667 6.33073 16.6667H13.6641C14.4597 16.6667 15.2228 16.3507 15.7854 15.7881C16.348 15.2255 16.6641 14.4624 16.6641 13.6667V6.33341C16.6641 4.67508 15.3224 3.33341 13.6641 3.33341H6.33073ZM14.3724 4.58341C14.6487 4.58341 14.9136 4.69316 15.109 4.88851C15.3043 5.08386 15.4141 5.34881 15.4141 5.62508C15.4141 5.90135 15.3043 6.1663 15.109 6.36165C14.9136 6.557 14.6487 6.66675 14.3724 6.66675C14.0961 6.66675 13.8312 6.557 13.6358 6.36165C13.4405 6.1663 13.3307 5.90135 13.3307 5.62508C13.3307 5.34881 13.4405 5.08386 13.6358 4.88851C13.8312 4.69316 14.0961 4.58341 14.3724 4.58341ZM9.99739 5.83341C11.1025 5.83341 12.1623 6.2724 12.9437 7.0538C13.7251 7.8352 14.1641 8.89501 14.1641 10.0001C14.1641 11.1051 13.7251 12.165 12.9437 12.9464C12.1623 13.7278 11.1025 14.1667 9.99739 14.1667C8.89233 14.1667 7.83252 13.7278 7.05112 12.9464C6.26971 12.165 5.83073 11.1051 5.83073 10.0001C5.83073 8.89501 6.26971 7.8352 7.05112 7.0538C7.83252 6.2724 8.89233 5.83341 9.99739 5.83341ZM9.99739 7.50008C9.33435 7.50008 8.69847 7.76347 8.22963 8.23231C7.76079 8.70115 7.49739 9.33704 7.49739 10.0001C7.49739 10.6631 7.76079 11.299 8.22963 11.7678C8.69847 12.2367 9.33435 12.5001 9.99739 12.5001C10.6604 12.5001 11.2963 12.2367 11.7652 11.7678C12.234 11.299 12.4974 10.6631 12.4974 10.0001C12.4974 9.33704 12.234 8.70115 11.7652 8.23231C11.2963 7.76347 10.6604 7.50008 9.99739 7.50008Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center gap-1">
                            <Image
                                src={graduate}
                                alt="Old Position"
                                width={60}
                                height={60}
                                className="rounded-[12px]"
                            />

                            <div
                                className="text-[12px] font-[400] font-[Outfit] leading-[normal] lowercase"
                                style={{ color: 'var(--Colour-Background-Colours-White---80, rgba(255, 255, 255, 0.80))' }}
                            >
                                Account Executive
                            </div>

                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div
                                className="text-[12px] font-[600] font-[Outfit] text-center leading-[normal]"
                                style={{ color: 'var(--Colour-Secondary-Colours-Mustard---400, #FFD23F)' }}
                            >
                                25 % Hike
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="113" height="8" viewBox="0 0 113 8" fill="none">
                                <path d="M112.354 4.35354C112.549 4.15828 112.549 3.8417 112.354 3.64644L109.172 0.464457C108.976 0.269194 108.66 0.269194 108.464 0.464457C108.269 0.659719 108.269 0.976301 108.464 1.17156L111.293 3.99999L108.464 6.82842C108.269 7.02368 108.269 7.34026 108.464 7.53552C108.66 7.73079 108.976 7.73079 109.172 7.53552L112.354 4.35354ZM0 4L4.37114e-08 4.5L112 4.49999L112 3.99999L112 3.49999L-4.37114e-08 3.5L0 4Z" fill="white"/>
                            </svg>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <Image
                                src={graduate}
                                alt="New Position"
                                width={60}
                                height={60}
                                className="rounded-[12px]"
                            />
                            <div
                                className="text-[12px] font-[400] font-[Outfit] leading-[normal] lowercase"
                                style={{ color: 'var(--Colour-Background-Colours-White---80, rgba(255, 255, 255, 0.80))' }}
                            >
                                Billing and Account Executive
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full flex flex-col">
                {/* Quotation mark */}
                <div className="absolute -top-[20px] left-[24px] -translate-x-1/2 text-white/30 text-[110px] font-semibold font-[Outfit] leading-none">
                    “
                </div>

                {/* Testimonial text */}
                <div className="text-white text-[14px] pt-[40px] font-normal font-[Outfit] text-center leading-normal px-4">
                    EduKyu's personalized guidance, in-depth program comparisons, and expert career counseling were invaluable.
                    They didn't just tell me about the programs; they understood my aspirations, my strengths, and my weaknesses,
                    and then matched me with the perfect program. They will not only help you find the right program, but they will
                    equip you with the tools and confidence to transform your career.
                </div>
            </div>


        </div>
    );
};

export default CareerSuccessCard;
