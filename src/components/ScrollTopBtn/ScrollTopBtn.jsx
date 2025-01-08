import { useEffect, useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import "./ScrollTopBtn.css";

const ScrollToTopButton = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top-container">
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <svg
          className="progress-circle"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="progress-bg"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
          <circle
            className="progress-bar"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={`${100 - scrollPercentage}`}
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
        </svg>
        <TiArrowForwardOutline className="scroll-to-top-icon" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
