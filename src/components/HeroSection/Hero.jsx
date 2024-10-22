import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';

const Hero = () => {
 
  const [adultsCount, setAdultsCount] = useState(1);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
 
  const adultsData = [
    {
      name: "1 Adult",
    },
    {
      name: "2 Adults",
    },
    {
      name: "3 Adults",
    },
    {
      name: "4 Adults",
    },
  ];
 
  const handleAdultsChange = (e) => setAdultsCount(e.target.value);
 
  
  return (
    <div className="hero__wrapper">
      <div className="hero__content">
        <small>Luxury Hotel & Restaurent</small>
        <h1 className="hero__content--title">Find Your Perfect Stay</h1>
        <p className="hero__content--description">
          Book amazing hotels at the best prices.
        </p>
      </div>
      <div className="hero__form">
 

        {/* Adults */}
        <div className="hero__form--group">
            <label htmlFor="rooms">Adults</label>
            <select id="rooms" value={adultsCount} onChange={handleAdultsChange}>
              {adultsData.map((adult,i) => (
                <option key={i} value={adult.name}>{adult.name}</option>
              ))}
            </select>
          </div>
        {/* check-in */}
        <div className="hero__form--group">
          <label htmlFor="check-in">Check-in</label>
          <div className="hero__form--date-picker">
          <FaCalendarAlt className="calendar-icon" />
          <DatePicker   className="calender"  selected={checkInDate}   onChange={(date) => setCheckInDate(date)} dateFormat='dd/MM/yyyy'  minDate={new Date()}/>
          </div>
        </div>
        {/* check-out */}
        <div className="hero__form--group">
          <label htmlFor="check-out">Check-out</label>
          <div className="hero__form--date-picker">
          <FaCalendarAlt className="calendar-icon" />
              <DatePicker className="date"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={checkInDate}  // Ensure check-out is after check-in
              /> 
          </div>
        </div>
        <button type="submit" className="hero__form--submit">
            Check Availability
          </button>
      </div>
    </div>
  );
};

export default Hero;
//npm install react-datepicker react-icons
