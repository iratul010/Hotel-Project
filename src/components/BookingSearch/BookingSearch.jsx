import { useLoaderData, useRouteError } from "react-router-dom";

const BookingSearch = () => {
  const { booking } = useLoaderData();
  const error = useRouteError();

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className="bookingSearch">
      <h1 className="bookingSearch-heading">Hotels Booking Data</h1>
      {booking && booking.length > 0 ? (
        <div className="hotels-list">
          {booking.map((hotel) => (
            <div className="hotel" key={hotel.id}>
              
              
 
                  <img
                    className="hotel__image"
                    src={hotel.rooms[1].imageUrl}
                    alt={`${hotel.hotelName} - ${hotel.rooms[1].roomType}`}
                  />
                  <h4 className="hotel__name heading-4 heading-4--dark">
                {hotel.hotelName}
              </h4>
                  <img className="hotel__heart" src="/public/svg/heart-like-svgrepo-com.svg"   alt="" />
                  <div className="hotel__rooms">
                    <img src="/public/svg/home.svg" alt="homo-logo" />
                    <p>{hotel.rooms[1].roomType}</p>
                  </div>
                  <div className="hotel__area">
                  <img src="/public/svg/location-pin.svg" alt="homo-logo" />
                    <p>{hotel.location.city}</p>
                  </div>
                  <div className="hotel__price">
                  <img src="/public/svg/key.svg" alt="homo-logo" />
                    <p>${hotel.rooms[1].pricePerNight} per night</p>
                  </div>
                  <div className="hotel__available">
                  <img src="/public/svg/available.svg" alt="homo-logo" />
                    <p>
                      {hotel.rooms[1].availability
                        ? "Available"
                        : "Unavailable"}
                    </p>
                  </div>
                  <div className="hotel__rating">
                    
                    <span
                      className="room-card__rating"
                      style={{ "--rating": hotel.rating }}
                    >
                    </span>
                  </div>
                  {/* cta-call to action */}
                  <button className="btn hotel__btn">Contact Realtor</button>
                 
              
            </div>
          ))}
        </div>
      ) : (
        <p>No booking data available.</p>
      )}
    </div>
  );
};

export default BookingSearch;
