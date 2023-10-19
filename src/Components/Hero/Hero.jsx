
import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Hero.css'
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import About from '../About/About'
import Contact from '../Contacts/Contact'
import Login from '../../Login';
import Signup from '../../Signup';

const Hero = () => {
  // const [showLogin, setShowLogin] = useState(false);
  // const handleLoginClick = () => {
  //   setShowLogin(true); // Show the login screen on click
  // };
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true); // Show the login screen on click
    navigate('/login'); // Navigate to the login page
  };

  const handleSignup = () => {
    setShowSignup(true);
    navigate('/signup');
  };

  return (
    
    <div>
      <section className='hero-wrapper'>
    <div className='paddings innerWidth  flexCenter hero-container'>
    {/*left side*/}
      <div className=' flexColStart left-section'>
      <div className='hero-title'>
  
      <h1>
      Friendship  Fueled <br/> Learning : <br/>Uniting Minds for Excellence.
      </h1>
      </div>

        <div className=' flexColStart desc '>
       <span className='secondary-txt first'>  the digital haven where the power of friendship meets the pursuit of knowledge.</span>
       <span className='secondary-txt'> Our platform is dedicated to redefining the way you and your friends approach studying and learning </span>
        </div>
        <div className=' flexCenter buttons'>
        <button className='login-b' onClick={handleLoginClick} >LOGIN</button>
        <button className='signup-b' onClick={handleSignup}>SIGNUP</button>
        </div>
      </div>
  

      {/*right section*/}
      <div className='right-section'>

          <div className='image-container'>
             <img src='../image-1.jpg' className='study' alt='image cant be displayed'/>
          </div>

      </div>
    </div>
     
      </section>
      
      <About />
      <Contact/>
     
    </div>
  )
}

export default Hero
