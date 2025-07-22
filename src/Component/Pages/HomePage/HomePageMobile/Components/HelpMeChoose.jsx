import React, { useState } from 'react';

export const HelpMeChoose = () => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with answer:', answer);
        // Handle form submission logic here
    };

    return (
        <section className="bg-white self-stretch flex w-full flex-col overflow-hidden items-stretch justify-center mt-6 px-[18px] py-16">
            <div
                className="flex flex-col overflow-hidden items-stretch px-6 py-[58px] rounded-xl"
                style={{
                    background: 'linear-gradient(135deg, #357E86 0%, #679EA4 100%)',
                }}
            >
                <div>
                    <h2 className="text-white text-xl font-semibold">Help me Choose</h2>
                    <p className="text-[#CDCDCD] text-sm font-normal mt-2">Lorem Epsum</p>
                </div>

                <form onSubmit={handleSubmit} className="font-normal mt-6">
                    <div className="max-w-full w-[277px] text-base text-white">
                        <label htmlFor="question1" className="block">
                            Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </label>
                        <textarea
                            id="question1"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="bg-white flex min-h-16 w-full mt-4 rounded-xl p-3 text-black resize-none"
                            placeholder="Enter your answer here..."
                            rows={3}
                        />
                    </div>
                    <p className="text-[#d2d2d2] text-sm mt-4">
                        Suggestion: Lorem ipsum dolor sit amet, consectetur adipis......
                    </p>

                    <button
                        type="submit"
                        className="mt-4 bg-white text-[#357E86] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Submit Answer
                    </button>
                </form>
            </div>
        </section>
    );
};
