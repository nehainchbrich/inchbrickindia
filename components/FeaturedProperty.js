"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/FeaturedProperties.module.css";

const properties = [
  { id: 1, title: "Luxury Villa", desc: "Spacious 4BHK villa with modern amenities and beautiful garden view.", price: "₹2.5 Cr", location: "South Delhi, New Delhi", img: "/images/house.jpg" },
  { id: 2, title: "Modern Apartment", desc: "Spacious 3BHK apartment with great amenities and city view.", price: "₹1.8 Cr", location: "Bandra West, Mumbai", img: "/images/house2.jpg" },
  { id: 3, title: "Premium Villa", desc: "Luxury 4BHK villa with garden and pool.", price: "₹3 Cr", location: "Whitefield, Bangalore", img: "/images/house3.jpg" },
  { id: 4, title: "Smart Home", desc: "Modern smart 3BHK home with automated systems.", price: "₹2.2 Cr", location: "Hinjewadi, Pune", img: "/images/house.jpg" },
  { id: 5, title: "Garden Villa", desc: "Spacious villa surrounded by greenery.", price: "₹2.7 Cr", location: "Banjara Hills, Hyderabad", img: "/images/house2.jpg" },
];

export default function FeaturedProperties() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const visible = 3;

  // Create cloned slides for infinite loop
  const slides = [
    ...properties.slice(-visible),
    ...properties,
    ...properties.slice(0, visible),
  ];

  const totalSlides = slides.length;

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // Handle infinite loop jump
  const handleTransitionEnd = () => {
    if (current >= properties.length) {
      setCurrent(0);
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${0}%)`;
      requestAnimationFrame(() => {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
      });
    } else if (current < 0) {
      setCurrent(properties.length - 1);
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${properties.length * (100 / visible)}%)`;
      requestAnimationFrame(() => {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
      });
    }
  };

  const slideWidth = 100 / visible;

  return (
    <div className="container">
    <div className={styles.featuredPropertySection}>
      <h2 className={styles.featuredPropertyTitle}>Featured Properties</h2>
      <div
        className={styles.featuredPropertySlider}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <div
          className={styles.featuredPropertyTrack}
          ref={trackRef}
          style={{ transform: `translateX(-${(current + visible) * slideWidth}%)`, transition: "transform 0.5s ease-in-out" }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((prop, index) => (
            <div key={index} className={styles.featuredPropertyItem}>
              <div className={styles.featuredPropertyCard}>
                <div className={styles.featuredPropertyMain}>
                  <div className={styles.featuredPropertyImg}>
                    <img src={prop.img} alt={prop.title} />
                  </div>
                  <div className={styles.featuredPropertyContent}>
                    <h4>{prop.title}</h4>
                    <p>{prop.desc}</p>
                    <div className={styles.featuredPropertyPrice}>{prop.price}</div>
                  </div>
                </div>
                <div className={styles.featuredPropertyFooter}>
                  <div className={styles.featuredPropertyLocation}>
                    <Image src="/images/tag.webp" alt="Location" width={14} height={14} />
                    {prop.location}
                  </div>
                  <button className={styles.exploreNowBtn}>Explore Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.featuredSliderBtn} ${styles.prev}`} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={`${styles.featuredSliderBtn} ${styles.next}`} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
    </div>
  );
}
