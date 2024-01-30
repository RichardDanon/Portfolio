import React from 'react';
import profileImage from '../Images/picture.jpg'; // Make sure this path is correct

function ProfileSection() {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem',
      backgroundColor: 'white',
    }}>
      {/* Profile Image */}
      <div style={{
        flexShrink: 0,
        backgroundImage: `url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px', // Slightly rounder edges
        width: '350px',
        height: '350px',
        margin: '0 2rem 2rem 0',
      }} />
      
      {/* Text Content */}
      <div style={{
        textAlign: 'left',
        maxWidth: '800px',
        minWidth: '300px',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Richard Danon-Woedey</h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#333',
        }}>
            I take pride in being a hard worker who never backs down from a challenge.
            I make sure I see every task I start through to the end. This determination is a big part of how
            I work because I don't let tough times get me down, and I always aim for the best results.
            Plus, I'm good at planning. I can figure out how much time and effort a task will need, which helps me manage my resources effectively. 
            This self-awareness helps me finish projects quickly and on schedule. I'm also a pretty quick problem solver. 
            I can spot the main issues in complex problems and cut through the confusion to get to the heart of the matter. 
            My knack for getting to the core of a problem is what makes me a valuable part of your team.`
        </p>
        
        {/* Buttons */}
        <div style={{ marginTop: '2rem' }}>
          <a href="#projects" style={{
            padding: '1rem 2rem',
            marginRight: '1rem',
            border: '2px solid black',
            backgroundColor: 'black',
            fontSize: '1rem',
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
          }}>Projects</a>
          <a href="#qualification" style={{
            padding: '1rem 2rem',
            border: '2px solid black',
            backgroundColor: 'white',
            fontSize: '1rem',
            color: 'black',
            textDecoration: 'none',
            display: 'inline-block',
          }}>Qualification</a>
        </div>
      </div>
      
    </section>
    
  );
}

export default ProfileSection;
