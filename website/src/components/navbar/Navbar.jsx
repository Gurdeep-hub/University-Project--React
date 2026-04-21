import './navbar.css';
import logo from '../../edusity_assets/logo.png';
import { useEffect, useState } from 'react';
import menu_icon from '../../edusity_assets/menu-icon.png';
import {Link} from 'react-scroll'
export function Navbar() {
    const[sticky,setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);
    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return(
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
           <img src={logo} className='logo' /> 
           <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-200} duration={500}>Program</Link></li>
            <li><Link  to='about' smooth={true} offset={-100} duration={500}>About us</Link></li>
            <li><Link  to='campus' smooth={true} offset={-200} duration={500}>Campus</Link></li>
            <li><Link  to='testimonials' smooth={true} offset={-200} duration={500}>Testimonials</Link></li>
            <li> <Link  to='contact' smooth={true} offset={-200} duration={500} className='btn'>Contact Us</Link></li>
           </ul>
           <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}