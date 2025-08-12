'use client';
import Image from 'next/image';

export default function Form({ image, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 relative overflow-hidden">
                {/* Optional Image at the Top */}
                {image && (
                    <div className="w-[100px] h-[100px] flex items-center justify-center mx-auto mt-4">
                        <img
                            src={image}
                            alt="Form banner"
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                    >
                        <path d="M7 4c-.256 0-.512.097-.707.293L4.293 6.293a1 1 0 000 1.414L11.586 15l-7.293 7.293a1 1 0 000 1.414l2 2a1 1 0 001.414 0L15 18.414l7.293 7.293a1 1 0 001.414 0l2-2a1 1 0 000-1.414L18.414 15l7.293-7.293a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0L15 11.586 7.707 4.293A1 1 0 007 4z"></path>
                    </svg>
                </button>

                {/* Form Content */}
                <div className="p-6">
                    <h2 className="text-center text-lg font-semibold">
                        Share your details and <br /> our counselor will connect you.
                    </h2>

                    <form className="mt-4 space-y-3">
                        <input
                            type="text"
                            placeholder="Enter Your Name*"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        <input
                            type="email"
                            placeholder="Enter Your E-mail id*"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        <input
                            type="text"
                            placeholder="Enter Your City*"
                            className="w-full border border-gray-300 rounded p-2"
                        />

                        <select
                            className="w-full border border-gray-300 rounded p-2"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choose Your University
                            </option>
                            <option>D.Y.Patil University</option>
                            <option>Amity University</option>
                            <option>Manipal University</option>
                            <option>Lovely Professional University</option>
                            <option>Jain University</option>
                            <option>Shoolini University</option>
                            <option>Uttaranchal University</option>
                            <option>Vivekananda Global University</option>
                            <option>NMIMS University</option>
                            <option>Sikkim Manipal University</option>
                        </select>

                        <div className="flex border border-gray-300 rounded overflow-hidden">
                            <span className="flex items-center px-2 bg-gray-100">+91</span>
                            <input
                                type="tel"
                                placeholder="Enter Your Mobile Number*"
                                className="flex-1 p-2 outline-none"
                            />
                        </div>

                        <label className="flex items-start space-x-2 text-sm">
                            <input type="checkbox" className="mt-1" />
                            <span>
                I authorise Edukyu and its associates to contact me with
                updates & notifications via Email, SMS, WhatsApp, and Voice
                call as per the Privacy Policy. This consent will override any
                registration for DNC / NDNC.
              </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500"
                        >
                            Enroll Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
