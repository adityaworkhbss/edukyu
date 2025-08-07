import Image from "next/image";
import contactImage from "@/../public/Resources/Images/contact_img.png"; // your image path

const ContactForm = () => {
    return (
        <div className="flex flex-col md:flex-row bg-pink-50 w-full min-h-screen">
            {/* LEFT SECTION */}
            <div className="md:w-1/2 relative flex justify-center items-end p-4 bg-white">
                <div className="absolute left-0 top-0 h-full w-20 bg-yellow-400 rounded-r-3xl"></div>
                <div className="absolute left-10 top-0 h-full w-10 bg-yellow-300 rounded-r-3xl"></div>
                <Image
                    src={contactImage}
                    alt="Contact Woman"
                    className="relative z-10 object-contain h-auto"
                    width={250}
                    height={400}
                />
            </div>

            {/* RIGHT SECTION */}
            <div className="md:w-1/2 px-6 md:px-16 py-10">
                <h2 className="text-3xl font-bold text-teal-900 mb-2">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="border rounded-md px-4 py-2" placeholder="Enter your full name" />
                        <input className="border rounded-md px-4 py-2" placeholder="Enter your email id" />
                        <input className="border rounded-md px-4 py-2" placeholder="Enter your city" />
                        <input className="border rounded-md px-4 py-2" placeholder="Enter your mobile number" />
                        <select className="border rounded-md px-4 py-2 md:col-span-2">
                            <option>Select your reason</option>
                            <option>Course Inquiry</option>
                            <option>Support</option>
                        </select>
                    </div>

                    <div className="flex items-start space-x-2 text-xs text-gray-600">
                        <input type="checkbox" className="mt-1" />
                        <p>
                            I authorise Edukyu and its associates to contact me via Email, SMS, WhatsApp, and Voice call as per the
                            Privacy Policy. This consent will override any DNC/NDNC registration.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="bg-teal-900 text-white px-6 py-2 rounded-full hover:bg-teal-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
