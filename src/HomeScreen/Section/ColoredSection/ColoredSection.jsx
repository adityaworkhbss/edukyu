import { useEffect, useState } from "react";

export default function ColoredSection({
                                           title,
                                           description,
                                           children,
                                           textColor = "text-white",
                                           titleColor = "text-[#FFD23F]"
                                       }) {
    const [backgroundImage, setBackgroundImage] = useState(
        "https://edukyu.com/new-edukyu/assets/cxp-assets/imgs/home-page/collage-bg.png"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(
                    "https://edukyu.com/new-edukyu/assets/cxp-assets/imgs/home-page/collage-mobile-bg.jpg"
                );
            } else {
                setBackgroundImage(
                    "https://edukyu.com/new-edukyu/assets/cxp-assets/imgs/home-page/collage-bg.png"
                );
            }
        };

        handleResize(); // Call once on load
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="relative overflow-hidden bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                paddingTop: window.innerWidth <= 768 ? "40px" : "200px",
                paddingBottom: window.innerWidth <= 768 ? "40px" : "200px",
                marginTop: window.innerWidth <= 768 ? "20px" : "0px",
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                {title && (
                    <h2 className={`${titleColor} text-[32px] font-semibold mb-4`}>
                        {title}
                    </h2>
                )}
                {description && (
                    <p className={`${textColor} text-[16px] leading-7`}>
                        {description}
                    </p>
                )}
                <div className="mt-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
