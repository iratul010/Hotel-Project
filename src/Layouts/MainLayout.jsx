import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useRef, useState } from "react";

const MainLayout = () => {
  const navbarRef = useRef(null); 
  const [navbarHeight, setNavbarHeight] = useState(0); 
  useEffect(() => {
  
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);
 
  return (
    <div className="main-layout">
    <Navbar navbarRef={navbarRef} />
    <main className="content"  >
        <Outlet context={{ navbarHeight }}/> 
      </main>
    <Footer/>
    </div>
  );
};

export default MainLayout;