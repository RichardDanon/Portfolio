import React from 'react';
import NavBar from '../Components/NavBar';
import ProfileSection from '../Components/ProfileSection';
import AboutMeSection from '../Components/AboutMeSection';
import ContactPage from '../Components/ContactPage';
import SkillSection from '../Components/SkillSection';
import ProjectSection from '../Components/ProjectSection'
import ExperienceSection from '../Components/ExperienceSection'


function LandingPage() {
    return (
        <>
            {/* Navbar section */}
            <NavBar />

            <div className="LandingPContainer" style={{ }}> {/* Add padding to create space */}
                <section id="home">
                {/* Profile Part starts here */}
                <ProfileSection />
                </section>

                {/* Subtitle - adjust as necessary */}
                <div style={{ textAlign: 'center', margin: '50px 0' }}> {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>More About Me</h2>
                    <p style={{ fontSize: '1rem', color: '#666' }}>Discover more about my hobbies, experiences and personal insights</p>
                </div>

                <section id="about">
                {/* About Me Section */}
                    <AboutMeSection />
                </section>
                
                <div id="experiences" style={{ textAlign: 'center', margin: '50px 0' }}>
                {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Work Experience</h2>
                </div>

                <section id="experiences">
                {/* About Me Section */}
                    <ExperienceSection />
                </section>

                <div id="skills" style={{ textAlign: 'center', margin: '50px 0' }}>
                {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Skill Section</h2>
                </div>

                <section id="skills">
                {/* Skills Section */}
                    <SkillSection />
                </section>

                <div id="skills" style={{ textAlign: 'center', margin: '50px 0' }}>
                {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Project Section</h2>
                </div>

                <section id="projects">
                {/* Skills Section */}
                    <ProjectSection />
                </section>

                {/* Contact Section */}
                <div id="contact" style={{ textAlign: 'center', margin: '50px 0' }}>
                {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Contact Me</h2>
                </div>

                <section id="contact">
                {/* Skills Section */}
                    <ContactPage />
                </section>
                

            </div>
        </>
    );
}

export default LandingPage;
