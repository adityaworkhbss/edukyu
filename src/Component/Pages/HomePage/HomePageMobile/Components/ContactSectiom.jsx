import React, { useState } from 'react';

export const ContactSection = () => {
    const [contactMessage, setContactMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contactMessage.trim()) {
            console.log('Contact request submitted:', contactMessage);
            alert('Thank you for your message! We will get back to you soon.');
            setContactMessage('');
        } else {
            alert('Please enter a message before sending.');
        }
    };

    return (
        <section className="mt-[47px]">
            <h2 className="w-full max-w-[321px] text-xl text-[#181D27] font-semibold">
                Contact Us
            </h2>
            <p className="text-[#535862] text-base font-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            <div className="bg-[rgba(205,205,205,1)] self-stretch flex min-h-[302px] w-full mt-6 rounded-2xl items-center justify-center">
                <div className="text-[#9B9B9B] text-lg font-medium">
                    Interactive Map Placeholder
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <div className="items-center flex  w-full gap-[18px] text-lg text-[#9B9B9B] font-light px-4 py-5 rounded-lg border-[1.785px] border-solid border-[#CDCDCD]">
          <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="Contact Us"
              className="text-[#9B9B9B] self-stretch my-auto bg-transparent outline-none w-full placeholder-[#9B9B9B] resize-none"
              rows={2}
          />
                </div>

                <button
                    type="submit"
                    className="justify-center flex w-full gap-[13px] text-[21px] text-white font-normal bg-[#679EA4] mt-6 px-[42px] py-4 rounded-lg hover:bg-[#5a8a91] transition-colors"
                >
                    <div>Send Request</div>
                </button>
            </form>
        </section>
    );
};
