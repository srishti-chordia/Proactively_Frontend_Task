import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Desktop Navbar
import MobileNavbar from "../components/MobileNavbar"; // Mobile Navbar
import ScrollingImages from "../components/ScrollingImages"; // Desktop Scrolling Images
import ScrollingImagesMobile from "../components/ScrollingImagesMobile"; // Mobile Scrolling Images
import HowItWorks from "../components/HowItWorks"; // Desktop How It Works
import HowItWorksMobile from "../components/HowItWorksMobile"; // Mobile How It Works

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check window width
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />} {/* Render Mobile or Desktop Navbar */}
      {isMobile ? <ScrollingImagesMobile /> : <ScrollingImages />} {/* Render Mobile or Desktop Scrolling Images */}
      {isMobile ? <HowItWorksMobile /> : <HowItWorks />} {/* Render Mobile or Desktop How It Works */}
    </>
  );
}

export default Home;
