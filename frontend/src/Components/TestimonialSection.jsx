import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TestimonialContainer() {
    const { t } = useTranslation();
    const [isLoadingNewTestimonials, setIsLoadingNewTestimonials] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

    const fetchTestimonials = async () => {
        setIsLoadingNewTestimonials(true);
        try {
            const response = await axios.get("https://api-portfolio-l6j5.onrender.com/api/v1/services/endorsementService");
            setTestimonials(response.data);
        } catch (error) {
            toast.error(t('testimonials.fetch_error'));
        }
        setIsLoadingNewTestimonials(false);
    };

    useEffect(() => {
        fetchTestimonials();
        const intervalId = setInterval(() => {
            fetchTestimonials();
            setTestimonialIndex(prevIndex => (prevIndex + 3) % testimonials.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [testimonials.length]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, comment } = formData;
        if (!name || !email || !comment) {
            toast.warn(t('testimonials.fill_all_fields'));
            return;
        }

        try {
            const response = await axios.post('https://api-portfolio-l6j5.onrender.com/api/v1/services/endorsementService', formData);
            toast.success(t('testimonials.submit_success'));
            setFormData({ name: '', email: '', comment: '' });
            fetchTestimonials();
        } catch (error) {
            toast.error(t('testimonials.submit_error'));
        }
    };

    const handleReload = () => {
        fetchTestimonials();
    };

    const renderTestimonials = () => {
        const testimonialsToShow = [];
        for (let i = 0; i < 3; i++) {
            const index = (testimonialIndex + i) % testimonials.length;
            testimonialsToShow.push(testimonials[index]);
        }
        return testimonialsToShow;
    };

    return (
        <div className="w-4/5 md:w-4/5 mx-auto">
            <button onClick={handleReload} className="bg-black text-white px-4 py-2 mb-4 rounded-lg">
                {t('testimonials.reload_button')}
            </button>
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="md:w-1/2 p-10">
                    {isLoadingNewTestimonials ? (
                        <div className="flex justify-center items-center h-full">
                            <svg className="animate-spin" width="30" viewBox="0 0 100 100" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M50 100C36.0417 100 24.2187 95.1562 14.5312 85.4687C4.84375 75.7812 0 63.9583 0 50C0 36.0417 4.84375 24.2187 14.5312 14.5312C24.2187 4.84375 36.0417 0 50 0C57.1875 0 64.0625 1.48333 70.625 4.45C77.1875 7.41667 82.8125 11.6625 87.5 17.1875V0H100V43.75H56.25V31.25H82.5C79.1667 25.4167 74.6104 20.8333 68.8312 17.5C63.0521 14.1667 56.775 12.5 50 12.5C39.5833 12.5 30.7292 16.1458 23.4375 23.4375C16.1458 30.7292 12.5 39.5833 12.5 50C12.5 60.4167 16.1458 69.2708 23.4375 76.5625C30.7292 83.8542 39.5833 87.5 50 87.5C58.0208 87.5 65.2604 85.2083 71.7188 80.625C78.1771 76.0417 82.7083 70 85.3125 62.5H98.4375C95.5208 73.5417 89.5833 82.5521 80.625 89.5313C71.6667 96.5104 61.4583 100 50 100Z"
                                    fill="lightgray" />
                            </svg>
                        </div>
                    ) : (
                        <>
                            {testimonials.length > 0 ? (
                                <div className="space-y-4">
                                    {renderTestimonials().map((testimonial, index) => (
                                        <div key={index}>
                                            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                            <p className="text-sm">{testimonial.company}</p>
                                            <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                                            <p className="text-xs text-gray-400">{testimonial.date}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>{t('testimonials.no_testimonials')}</p>
                            )}
                        </>
                    )}
                </div>

                <div className="md:w-1/2 bg-gray-100 p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                {t('testimonials.name_label')}
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder={t('testimonials.name_placeholder')}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                {t('testimonials.email_label')}
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder={t('testimonials.email_placeholder')}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">
                                {t('testimonials.comment_label')}
                            </label>
                            <textarea
                                id="comment"
                                placeholder={t('testimonials.comment_placeholder')}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                rows="4"
                                value={formData.comment}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-black text-white p-4 rounded-lg hover:bg-blue-600">
                            {t('testimonials.submit_button')}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default TestimonialContainer;



    // const fetchTestimonials = async () => {
    //     setIsLoadingNewTestimonials(true);
    //     try {
    //         const response = await axios.get("http://localhost:8080/api/v1/services/endorsementService");
    //         setTestimonials(response.data);
    //         let indexRandom = Math.floor(Math.random() * response.data.length);
    //         setTestimonialIndex(indexRandom);
    //     } catch (error) {
    //         toast.error("Failed to fetch testimonials");
    //     }
    //     setIsLoadingNewTestimonials(false);
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const { name, email, comment } = formData;
    //     if (!name || !email || !comment) {
    //         toast.warn("Please fill in all fields.");
    //         return;
    //     }

    //     try {
    //         const response = await axios.post('http://localhost:8080/api/v1/services/endorsementService', formData);
    //         toast.success("Testimonial submitted successfully!");
    //         setFormData({ name: '', email: '', comment: '' }); 
    //     } catch (error) {
    //         toast.error("Failed to submit testimonial.");
    //     }
    // };