"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const galleryImages = [
  "/images/photos/4.jpg",
  "/images/photos/5.jpg",
  "/images/photos/6.jpg",
  "/images/photos/RAJ03349.JPG",
  "/images/photos/8.JPG",
  "/images/photos/DSC06472.JPG",
  "/images/photos/DSC06515.JPG",
  "/images/photos/DSC06555.JPG",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className="container">
        <h2 className={styles.title}>Gallery of Expo Moments that Matter</h2>

        <div className={styles.wrapper}>
          {galleryImages.map((src, i) => (
            <div className={styles.image} key={i} onClick={() => openLightbox(i)}>
              <Image src={src} alt={`Gallery ${i}`} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {currentIndex !== null && (
          <div className={styles.lightbox}>
            <button className={`${styles.control} ${styles.prev}`} onClick={prevImage}>
              ❮
            </button>
            <div className={styles.lightboxInner}>
              <Image
                src={galleryImages[currentIndex]}
                alt={`Large ${currentIndex}`}
                width={1000}
                height={600}
                style={{ objectFit: "contain" }}
              />
            </div>
            <button className={`${styles.control} ${styles.next}`} onClick={nextImage}>
              ❯
            </button>
            <button className={styles.close} onClick={closeLightbox}>
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
