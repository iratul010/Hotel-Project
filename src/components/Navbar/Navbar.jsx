import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

import {   useRef, useState } from "react";
// eslint-disable-next-line react/prop-types
const Navbar = ({navbarRef}) => {
  const [isArrow, setIsArrow] = useState(false);
  const dropdownRef = useRef(null);
  const handleMouseEnter = (e) => {
    e.preventDefault();
    setIsArrow(true)
  };
  const handleMouseLeave= (e) => {
    e.preventDefault();
    setIsArrow(false)
  };

 
  /*
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
   
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }

  };*/
  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar__brand">
        <Link to="/">
          <img
            className="navbar__logo"
            src="../../../public/logo/room-service.png"
            alt=""
          />
          <span>HotelSmart</span>
        </Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>

        <li
          className="navbar__item"
          ref={dropdownRef} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" >
            <span>Rooms</span> 
            {!isArrow ? <IoIosArrowDropdown /> : <MdKeyboardArrowUp />}
          </a>
          <ul className='navbar__dropdown--menu'>
            <li>
              <Link to="/rooms/:deluxe">Deluxe&nbsp;Rooms</Link>
            </li>
            <li>
              <Link to="/rooms/:suite">Suite&nbsp;Rooms</Link>
            </li>
            <li>
              <Link to="/rooms/:standard">Standard&nbsp;Rooms</Link>
            </li>
          </ul>
        </li>
        <li className="navbar__item">
          <Link to="/amenities">Amenities</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about">About&nbsp;Us</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="navbar__item">
          <Link to="/book">Book&nbsp;Now</Link>
        </li>
        <li className="navbar__item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="navbar__navigation">
        <input
          type="checkbox"
          className="navbar__navigation--checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navbar__navigation--btn">
          {/* navbar icon */}
          <span className="navbar__navigation--icon">&nbsp;</span>
        </label>
        <div className="navbar__navigation--background"></div>
        <nav className="navbar__navigation--nav">
          <ul className="navbar__navigation--list">
            <li className="navbar__navigation--item">
              <Link><span>01</span>Home</Link>
            </li>
         
            <li className="navbar__navigation--item">
              <Link><span>02</span>Rooms</Link>
            </li>
        
            <li className="navbar__navigation--item">
              <Link><span>03</span>Amenities</Link>
            </li>
         
            <li className="navbar__navigation--item">
              <Link><span>04</span>About Us</Link>
            </li>
         
            <li className="navbar__navigation--item">
              <Link><span>05</span>Contact</Link>
            </li>
           
            <li className="navbar__navigation--item">
              <Link><span>06</span>Book Now</Link>
            </li>
    
            <li className="navbar__navigation--item">
              <Link><span>07</span>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
