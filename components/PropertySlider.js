"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/PropertySlider.module.css";

const properties = [
  {
    img: "/images/slides-img.jpg",
    price: "₹1.2 Cr",
    address: "Main St, City",
    sqft: "1200 sqft",
    bath: "2 Bath",
    bed: "3 Bed",
  },
  {
    img: "/images/slides-img.jpg",
    price: "₹1.2 Cr",
    address: "Main St, City",
    sqft: "1200 sqft",
    bath: "2 Bath",
    bed: "3 Bed",
  },
  {
    img: "/images/slides-img.jpg",
    price: "₹1.2 Cr",
    address: "Main St, City",
    sqft: "1200 sqft",
    bath: "2 Bath",
    bed: "3 Bed",
  },
  {
    img: "/images/slides-img.jpg",
    price: "₹1.2 Cr",
    address: "Main St, City",
    sqft: "1200 sqft",
    bath: "2 Bath",
    bed: "3 Bed",
  },
  {
    img: "/images/slides-img.jpg",
    price: "₹1.2 Cr",
    address: "Main St, City",
    sqft: "1200 sqft",
    bath: "2 Bath",
    bed: "3 Bed",
  },
];

export default function PropertySlider() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const track = trackRef.current;
    const container = containerRef.current;

    if (!track) return;

    // Duplicate items only once
    if (track.children.length === properties.length) {
      properties.forEach((property, idx) => {
        const clone = track.children[idx].cloneNode(true);
        track.appendChild(clone);
      });
    }

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      track.style.animation = "none";
      resizeTimeout = setTimeout(() => {
        track.style.animation = "";
      }, 50);
    };

    window.addEventListener("resize", handleResize);

    if (container) {
      const handleMouseEnter = () => {
        track.style.animationPlayState = "paused";
      };
      const handleMouseLeave = () => {
        track.style.animationPlayState = "running";
      };
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.autoSliderSection}>
      <div className={styles.autoSlider} ref={containerRef}>
        <div className={styles.autoSliderTrack} ref={trackRef}>
          {isMounted &&
            properties.map((property, idx) => (
              <div key={idx} className={styles.autoSliderItem}>
                <div className={styles.propertyImage}>
                  <Image
                    src={property.img}
                    alt={`Project ${idx + 1}`}
                    width={400}
                    height={250}
                    className={styles.img}
                  />
                  <span className={styles.propertyPrice}>{property.price}</span>
                  <span className={styles.propertyAddress}>
                    <Image
                      src="/images/address-icon.png"
                      alt="Address"
                      width={16}
                      height={16}
                    />
                    <span>{property.address}</span>
                  </span>
                </div>
                <div className={styles.propertyFeatures}>
                  <div className={styles.feature}>
                    <Image
                      src="/images/sq-ft.png"
                      alt="Sq Ft"
                      width={16}
                      height={16}
                    />
                    {property.sqft}
                  </div>
                  <div className={styles.feature}>
                    <Image
                      src="/images/bathroom.png"
                      alt="Bathrooms"
                      width={16}
                      height={16}
                    />
                    {property.bath}
                  </div>
                  <div className={styles.feature}>
                    <Image
                      src="/images/bedroom.png"
                      alt="Bedrooms"
                      width={16}
                      height={16}
                    />
                    {property.bed}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
