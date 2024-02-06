import React from 'react';
import NavBar from '../Components/NavBar';
import ProfileSection from '../Components/ProfileSection';
import AboutMeSection from '../Components/AboutMeSection';
import ContactPage from '../Components/ContactPage';


function LandingPage() {
    return (
        <>
            {/* Navbar section */}
            <NavBar />

            <div className="LandingPContainer" style={{ padding: '50px 0' }}> {/* Add padding to create space */}
                {/* Profile Part starts here */}
                <ProfileSection /> 

                {/* Subtitle - adjust as necessary */}
                <div style={{ textAlign: 'center', margin: '50px 0' }}> {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>More About Me</h2>
                    <p style={{ fontSize: '1rem', color: '#666' }}>Discover more about my hobbies, experiences and personal insights</p>
                </div>

                {/* About Me Section */}
                <AboutMeSection />

                {/* Contact Section */}
                <div id="contact" style={{ textAlign: 'center', margin: '50px 0' }}>
                {/* Add margin to create space */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Contact me</h2>
                </div>
                <ContactPage />

            </div>
        </>
    );
}

export default LandingPage;
