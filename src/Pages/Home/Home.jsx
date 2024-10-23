import {   useOutletContext } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import BookingSearch from "../../components/BookingSearch/BookingSearch";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
 
import Hero from "../../components/HeroSection/Hero";
import HotelsGallery from "../../components/HotelsGallery/HotelsGallery";

const Home = (   ) => {
 
 
 
  const { navbarHeight } = useOutletContext(); // Navbar এর উচ্চতা এখানে ক্যাচ হচ্ছে
  return (
    <div className="home">
      <section className="home__section home__section--hero"   style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
        <Hero />
      </section>
      <section className="home__section home__section--booking-search">
        <BookingSearch   />
      </section>
      <section className="home__section home__section--hotels-gallery">
        <HotelsGallery />
      </section>
      <section className="home__section home__section--customer-reviews">
        <CustomerReviews />
      </section>
      <section className="home__section home__section--about-us">
        <AboutUs />
      </section>
    </div>
  );
};

export default Home;
