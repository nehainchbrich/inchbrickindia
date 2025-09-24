"use client";
import Image from "next/image";
import styles from "../../styles/listing/Gallery.module.css";

export default function PropertyGallery() {
  const images = [
    "/images/house2.jpg",
    "/images/house3.jpg",
    "/images/slides-img.jpg",
    "/images/house.jpg",
  ];

  return (
      <div className={styles.propertyGalleryMain}>
        {/* Main Image */}
        <a
          href="/images/house.jpg"
          data-fancybox="property"
          data-caption="Luxury Apartment in South Delhi"
        >
          <Image
            src="/images/house.jpg"
            alt="Main Property"
            width={800}
            height={500}
            className={styles.mainImg}
            priority
          />
        </a>

        {/* Overlay */}
        <div className={styles.propertyOverlay}>
          <h3>Luxury Apartment • 3BHK</h3>
          <p>South Delhi, New Delhi</p>
          <p className={styles.textAllipsis}>
            Montiva by VIDA – Waterfront Living at Dubai Creek Harbour | Marina Access | Sc...
          </p>
          <span className={styles.price}>₹ 2.5 Cr</span>
        </div>

        {/* Thumbnails */}
        <div className={styles.propertyThumbs}>
          {images.map((src, i) => (
            <a
              key={i}
              href={src}               // full-size for popup
              data-fancybox="property" // group
              data-src={src}           // make sure Fancybox loads original
            >
              <Image
                src={src}               // still use same image as thumbnail
                alt={`Thumb ${i}`}
                width={120}             // thumbnail size
                height={80}
              />
            </a>
          ))}
        </div>
      </div>
  );
}
