import React from 'react';

function NavBar() {
  return (
    <header style={{
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo/Brand Name */}
        <a href="#home" style={{ color: 'black', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', marginRight: '40px' }}>My Logo</a>
        
        {/* Navigation Links */}
        <a href="#testimonials" style={{ color: 'black', textDecoration: 'none', marginLeft: '20px' }}>Testimonials</a>
        <a href="#projects" style={{ color: 'black', textDecoration: 'none', marginLeft: '20px' }}>Projects ▼</a>
        <a href="#qualification" style={{ color: 'black', textDecoration: 'none', marginLeft: '20px' }}>Qualification</a>
        <a href="#experiences" style={{ color: 'black', textDecoration: 'none', marginLeft: '20px' }}>Experiences ▼</a>
      </div>
      
      {/* Contact Button */}
      <a href="/contact" style={{
        padding: '10px 20px',
        backgroundColor: '#6a1b9a',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: '300'
      }}>
        Contact Me
      </a>
    </header>
  );
}

export default NavBar;
