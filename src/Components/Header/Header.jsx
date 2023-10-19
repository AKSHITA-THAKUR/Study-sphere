import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    
      <section className='h-wrapper'>
      <div className='  paddings innerWidth h-container'>

     <img className='logo' src='./logo.png.png' alt='logo' width ={110} />
     <div className=' flexCenter h-menu'>
     <Link to ={'/'}>Home</Link>
      <Link to={'/About'}>About</Link>
     <Link to={'/Contact'}>Contact </Link>
      
     </div>

      </div>
      </section>
   
  )
}

export default Header
