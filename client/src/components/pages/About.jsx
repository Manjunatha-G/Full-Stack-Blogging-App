import React from 'react';
import './About.css'; // optional for styling
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>This a Blog Website made by Ankit Mathapati, Built on Mern Stack, Check Ankit's  
      <a href='https://ankit-mathapati.vercel.app' className='text-blue-500 underline ml-1'>Portfolio</a>
      </p>
      <div className='text-3xl mb-2 font-medium'> Contact Details:</div>
      <p className='flex items-center gap-2'> <FaEnvelope/> Email : ankitsm38@gmail.com</p>
      <p className='flex items-center gap-2'> <FaPhoneAlt/> Phone : +91 8073894827</p>
    </div>
  );
};

export default About;
