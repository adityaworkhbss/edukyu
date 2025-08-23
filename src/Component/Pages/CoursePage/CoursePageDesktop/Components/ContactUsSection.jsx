import React from 'react';
import { ContactForm } from './UI/ContactForm';

export const ContactUsSection = () => {
    return (
        <section className="bg-white overflow-hidden py-12">
            <div className="gap-5 flex max-md:flex-col">
                <aside className="w-[32%] max-md:w-full max-md:ml-0">
                    <div className="relative flex grow items-stretch h-full ">
                        <div className="bg-[rgba(255,199,15,1)] flex w-[145px] shrink-0 rounded-[22px_0px_0px_22px] h-full z-10" />

                        <img
                            src="https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/5fed2d668c7580518ce072c8d4b69e2e4e8efc95?placeholderIfAbsent=true"
                            className="z-0 absolute bottom-0 right-0 object-contain w-[180px] shrink-0 max-w-full rounded-[0px_22px_22px_0px]"
                            alt="Contact us illustration"
                        />
                    </div>
                </aside>

                <main className="w-[68%] ml-5 max-md:w-full max-md:ml-0">
                    <ContactForm />
                </main>
            </div>
        </section>
    );
};
