"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/listing/FeaturedSlider.module.css";

export default function FeaturedSlider() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const slides = [
    { src: "/images/house2.jpg", title: "Modern Villa in Hyderabad", price: "₹ 4.8 Cr" },
    { src: "/images/house3.jpg", title: "Smart Apartment in Pune", price: "₹ 1.2 Cr" },
    { src: "/images/house.jpg", title: "Luxury Apartment in Delhi", price: "₹ 2.5 Cr" },
    { src: "/images/slides-img.jpg", title: "Premium Penthouse in Mumbai", price: "₹ 7.5 Cr" },
  ];

  const slidesToShow = 3;

  // ✅ useCallback ensures stable reference for useEffect
  const updateSlider = useCallback(() => {
    if (trackRef.current) {
      const firstSlide = trackRef.current.querySelector(`.${styles.slide}`);
      if (firstSlide) {
        const width = firstSlide.offsetWidth + 20; // include margin
        setSlideWidth(width);
        trackRef.current.style.transform = `translateX(-${index * width}px)`;
      }
    }
  }, [index]);

  // Re-run on index change
  useEffect(() => {
    updateSlider();
  }, [index, updateSlider]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener("resize", updateSlider);
    updateSlider(); // initial run

    return () => window.removeEventListener("resize", updateSlider);
  }, [updateSlider]);

  return (
    <section className={styles.featuredSection}>
      <h3>Featured Properties</h3>
      <div className={styles.sliderContainer}>
        <button
          onClick={() => index > 0 && setIndex(index - 1)}
          className={styles.prev}
        >
          &#10094;
        </button>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack} ref={trackRef}>
            {slides.map((slide, i) => (
              <div className={styles.slide} key={i}>
                <div className={styles.featuredCard}>
                  <Image src={slide.src} alt={slide.title} width={300} height={200} />
                  <div className={styles.cardBody}>
                    <h4>{slide.title}</h4>
                    <p className={styles.price}>{slide.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => index < slides.length - slidesToShow && setIndex(index + 1)}
          className={styles.next}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
