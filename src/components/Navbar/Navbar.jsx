import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const [isArrow, setIsArrow] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropdownToggle = (e) => {
    e.preventDefault();
 
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
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">
          <img
            className="navbar__logo"
            src="../../../public/logo/hotel.png"
            alt=""
          />
          <span>Hotel Booking</span>
        </Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>

        <li className="navbar__item" onClick={handleDropdownToggle}  ref={dropdownRef}    >
          <a href=""><span>Rooms</span>{!isArrow?<IoIosArrowDropdown />:<MdKeyboardArrowUp />}</a>
          <ul  className={`navbar__dropdown--menu`} >
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
    </nav>
  );
};

export default Navbar;
