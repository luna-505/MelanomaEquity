import React, { useState, useEffect } from 'react';
import SideNavBar from '../UI/SideNavBar';
import HorizontalNavBar from '../UI/HorizontalNavBar';

function NavBar() {
  // State to keep track of screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <React.Fragment>
      {isMobile ? <SideNavBar /> : <HorizontalNavBar />}
    </React.Fragment>
  );
}

export default NavBar;
