import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import ProfileSection from '../Components/ProfileSection'; 


function LandingPage() {
    
    return (
        <>
            {/* Navbar section */}
            <NavBar/>

            <div className="LandingPContainer">
                {/*Profile Part starts here*/}
                <ProfileSection /> 
            </div>
        </>
    )
}

export default LandingPage