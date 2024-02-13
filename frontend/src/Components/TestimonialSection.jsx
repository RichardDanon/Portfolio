import { useState } from "react";
import axios from "axios";

function TestimonialContainer() {
    const [isLoadingNewTestimonials, setIsLoadingNewTestimonials] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const fetchTestimonials = async () => {
        setIsLoadingNewTestimonials(true);
        try {
            const response = await axios.get("http://localhost:8080/api/v1/services/endorsementService");
            setTestimonials(response.data);
            let indexRandom = Math.floor(Math.random() * response.data.length);
            setTestimonialIndex(indexRandom); // Start with the first testimonial
        } catch (error) {
            console.log(error);
        }
        setIsLoadingNewTestimonials(false);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const comment = document.getElementById('message').value

        if (comment && name && email) {
            const response = await fetch('http://localhost:8080/api/v1/services/endorsementService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    comment: comment,
                }),
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
        }
        
}

    const handleReload = () => {
        fetchTestimonials();
    };

    const activeTestimonial = testimonials[testimonialIndex] || {};

    return (
        <div className="w-4/5 md:w-4/5 mx-auto">
            <button onClick={handleReload} className="bg-black text-white px-4 py-2 mb-4 rounded-lg">Reload Testimonials</button>
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Testimonial Display Section */}
                <div className="md:w-1/2 p-10">
                    {isLoadingNewTestimonials ? (
                        <div className="flex justify-center items-center h-full">
                            <svg className="animate-spin" width="30" viewBox="0 0 100 100" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M50 100C36.0417 100 24.2187 95.1562 14.5312 85.4687C4.84375 75.7812 0 63.9583 0 50C0 36.0417 4.84375 24.2187 14.5312 14.5312C24.2187 4.84375 36.0417 0 50 0C57.1875 0 64.0625 1.48333 70.625 4.45C77.1875 7.41667 82.8125 11.6625 87.5 17.1875V0H100V43.75H56.25V31.25H82.5C79.1667 25.4167 74.6104 20.8333 68.8312 17.5C63.0521 14.1667 56.775 12.5 50 12.5C39.5833 12.5 30.7292 16.1458 23.4375 23.4375C16.1458 30.7292 12.5 39.5833 12.5 50C12.5 60.4167 16.1458 69.2708 23.4375 76.5625C30.7292 83.8542 39.5833 87.5 50 87.5C58.0208 87.5 65.2604 85.2083 71.7188 80.625C78.1771 76.0417 82.7083 70 85.3125 62.5H98.4375C95.5208 73.5417 89.5833 82.5521 80.625 89.5313C71.6667 96.5104 61.4583 100 50 100Z"
                                    fill="lightgray"/>
                            </svg>
                        </div>
                    ) : (
                        <>
                            {testimonials.length > 0 ? (
                                <div className="space-y-4">
                                    {/* Your profileIcon component */}
                                    <h3 className="text-lg font-semibold">{activeTestimonial.name}</h3>
                                    <p className="text-sm">{activeTestimonial.company}</p>
                                    <p className="text-gray-600 italic">"{activeTestimonial.comment}"</p>
                                    <p className="text-xs text-gray-400">{activeTestimonial.date}</p>
                                </div>
                            ) : (
                                <p>No testimonials available.</p>
                            )}
                        </>
                    )}
                </div>

                {/* Input Fields Section */}
                <div className="md:w-1/2 bg-gray-100 p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="E-mail"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message..."
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-4 rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TestimonialContainer;
