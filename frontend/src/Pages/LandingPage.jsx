import React from 'react';
import NavBar from '../Components/NavBar';
import ProfileSection from '../Components/ProfileSection';
import AboutMeSection from '../Components/AboutMeSection';
import ContactPage from '../Components/ContactPage';
import SkillSection from '../Components/SkillSection';
import ProjectSection from '../Components/ProjectSection';
import ExperienceSection from '../Components/ExperienceSection';
import TestimonialSection from '../Components/TestimonialSection';

function LandingPage() {
    // Function to smooth scroll to a section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <NavBar />

            <div className="flex flex-col items-center">
                <section id="home" className="w-full my-8">
                    <ProfileSection />
                    <div className="text-center mt-8">
                        <button onClick={() => scrollToSection('about')} className="animate-bounce mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>

                <h2 id="about" className="text-center text-3xl md:text-4xl font-bold mb-2">More About Me</h2>
                <p className="text-center text-sm md:text-base text-gray-600">Discover more about my hobbies, experiences, and personal insights</p>
                <section  className="w-full my-8">
                    <AboutMeSection />
                    <div className="text-center mt-8">
                        <button onClick={() => scrollToSection('experiences')} className="animate-bounce mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>

                <h2 id="experiences" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Experience Section</h2>
                <section className="w-full my-8">
                    <ExperienceSection />
                    <div className="text-center mt-8">
                        <button onClick={() => scrollToSection('skills')} className="animate-bounce mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>
                
                <h2 id="skills" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Skill Section</h2>
                <section className="w-full my-8">
                    <SkillSection />
                    <div className="text-center mt-8">
                        <button onClick={() => scrollToSection('projects')} className="animate-bounce mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>

                <h2 id="projects" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Project Section</h2>
                <section className="w-full my-8">
                    <ProjectSection />
                    <div className="text-center mt-8">
                        <button onClick={() => scrollToSection('testimonials')} className="animate-bounce mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>

                <h2 id="testimonials" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Testimonial Section</h2>
                <section className="w-full my-8">
                    <TestimonialSection />
                    <div className="text-center mt-8">
                        <button onClick={() => scrollToSection('contact')} className="animate-bounce mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>

                <section id="contact" className="w-full my-8">
                    <ContactPage />
                </section>
            </div>
        </>
    );
}

export default LandingPage;
