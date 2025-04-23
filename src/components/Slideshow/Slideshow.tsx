import React, { useState, useEffect, useCallback } from "react";
import "./Slideshow.css";

interface SlideshowProps {
  autoplay?: boolean;
  interval?: number;
  transition?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  height?: string;
}

const Slideshow: React.FC<SlideshowProps> = ({
  autoplay = true,
  interval = 5000,
  transition = 600,
  showControls = true,
  showIndicators = true,
  height = "400px",
}) => {
  // In production, you would dynamically load these from the folder
  const images = [
    { src: "/slideshow-images/image1.jpg", alt: "Professional photo 1" },
    { src: "/slideshow-images/image2.jpg", alt: "Professional photo 2" },
    { src: "/slideshow-images/image3.jpg", alt: "Professional photo 3" },
    { src: "/slideshow-images/image4.jpg", alt: "Professional photo 4" },
    { src: "/slideshow-images/image5.jpg", alt: "Professional photo 5" },
    { src: "/slideshow-images/image6.jpg", alt: "Professional photo 6" },
    { src: "/slideshow-images/image7.jpg", alt: "Professional photo 7" },
    { src: "/slideshow-images/image8.jpg", alt: "Professional photo 8" },
    { src: "/slideshow-images/image9.jpg", alt: "Professional photo 9" },
    { src: "/slideshow-images/image10.jpg", alt: "Professional photo 10" },
    { src: "/slideshow-images/image11.jpg", alt: "Professional photo 11" },
    { src: "/slideshow-images/image12.jpg", alt: "Professional photo 12" },
    { src: "/slideshow-images/image13.jpg", alt: "Professional photo 13" },
    { src: "/slideshow-images/image14.jpg", alt: "Professional photo 14" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), transition);
    }
  }, [isTransitioning, images.length, transition]);

  const goToPrevious = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setTimeout(() => setIsTransitioning(false), transition);
    }
  }, [isTransitioning, images.length, transition]);

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), transition);
    }
  };

  // Autoplay functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (autoplay) {
      intervalId = setInterval(goToNext, interval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, interval, goToNext]);

  if (images.length === 0) {
    return (
      <div className="slideshow-container" style={{ height }}>
        No images to display
      </div>
    );
  }

  return (
    <div className="slideshow-container" style={{ height }}>
      <div
        className="slideshow"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning
            ? `transform ${transition}ms ease-in-out`
            : "none",
        }}
        aria-live="polite"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="slide-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {showControls && (
        <div className="slideshow-controls">
          <button
            className="control-button prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 20"
              width="20"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            className="control-button next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {showIndicators && (
        <div className="slide-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
