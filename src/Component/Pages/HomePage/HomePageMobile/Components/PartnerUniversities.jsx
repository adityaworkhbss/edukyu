import React from 'react';

const UniversityCard = ({ name, logoSrc, certificationIcons }) => {
    return (
        <article
            className="flex-1 pb-4 rounded-lg border border-[#CDCDCD] bg-white overflow-hidden"
            aria-label={`University card for ${name}`}
        >
            <div className="bg-white flex max-w-full flex-col overflow-hidden items-stretch justify-center py-[9px] rounded-lg">
                <img
                    src={logoSrc}
                    alt={`${name} logo`}
                    className="aspect-[2.42] object-contain w-full"
                />
            </div>
            <div className="w-full mt-2 px-2">
                <div className="text-[#011C1F] text-base font-normal">{name}</div>

                <div className="flex w-full items-center gap-2 self-stretch mt-3">
                    {certificationIcons.map((iconSrc, index) => (
                        <div
                            key={index}
                            className="flex w-8 h-8 p-[8px_2.508px_7.333px_2.508px] justify-center items-center bg-white rounded"
                        >
                            <img
                                src={iconSrc}
                                alt="Certification icon"
                                className="w-[26.984px] h-[16.667px] shrink-0 object-contain aspect-[1.62]"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </article>
    );
};

export const PartnerUniversities = () => {
    const certificationIcons = [
        "https://api.builder.io/api/v1/image/assets/TEMP/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/TEMP/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/TEMP/0c3659de9792dd06ae7668c12052ce22c4b7376a?placeholderIfAbsent=true",
    ];

    const universities = [
        {
            name: "NMIMS University Online",
            logoSrc:
                "https://api.builder.io/api/v1/image/assets/TEMP/72a709f08e75d04224982c33995f174fbb184de0?placeholderIfAbsent=true",
            certificationIcons,
        },
        {
            name: "Another University",
            logoSrc:
                "https://api.builder.io/api/v1/image/assets/TEMP/72a709f08e75d04224982c33995f174fbb184de0?placeholderIfAbsent=true",
            certificationIcons,
        },
    ];

    return (
        <section className="w-full flex flex-col items-stretch mt-[61px]">
            <div className="text-[#181D27] text-xl font-semibold tracking-[-0.4px]">
                Partner Universities
            </div>

            <div className="text-[#535862] text-base font-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </div>

            <div className="flex flex-wrap gap-[17px] mt-8">
                {universities.map((uni) => (
                    <UniversityCard
                        key={uni.name}
                        name={uni.name}
                        logoSrc={uni.logoSrc}
                        certificationIcons={uni.certificationIcons}
                    />
                ))}
            </div>
        </section>
    );
};
