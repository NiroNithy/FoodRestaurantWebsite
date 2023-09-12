import React from 'react'
import {Link} from 'react-scroll';
import '../Components/navbar.css';
const Navbar = () => {
  return (
    <nav className='Navbar'>
       <div className='logo'>B&B</div>
       <div className='MenuItem'>
             <Link className='Menus'>Home</Link>
             <Link className='Menus'>About Us</Link>
             <Link className='Menus'>Contact Us</Link>
             <Link className='Menus'>Menu</Link>
       </div>
       <button className='MenuBtn'>Sign In</button>
    </nav>
  )
}

export default Navbar