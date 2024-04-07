import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const SCROLL_THRESHOLD = 300;

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ScrollToTopButton = styled.div`
  animation: ${moveUpDown} 2s infinite;
`;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <ScrollToTopButton
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-300 ease-in-out hover:bg-opacity-70"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </ScrollToTopButton>
      )}
    </div>
  );
}
