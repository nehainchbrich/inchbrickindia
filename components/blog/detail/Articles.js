"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Share2 } from "lucide-react";
import styles from "../../../styles/blog/Detail.module.css";

const Articles = () => {
  return (
    <article className={styles.blogContent}>
      <p className={styles.intro}>
        <span className={styles.dropCap}>D</span>ubai is home to some of the
        most luxurious villas in the world. In this article, we explore the top
        10 handpicked villas that combine modern design, premium amenities, and
        prime locations.
      </p>

      <h2>The Rise of Luxury Villas</h2>
      <p>
        Over the last decade, Dubai has become a global hub for real estate
        investment. With its booming economy, world-class infrastructure, and
        tax-free living, the demand for luxury homes continues to rise.
      </p>

      <blockquote className={styles.blockquote}>
        {"Luxury is not about price—it’s about experience and lifestyle."}
        <span> – Real Estate Expert</span>
      </blockquote>

      {/* Social Media Icons */}
      <div className={styles.socialIcons}>
        <h3>Share this article:</h3>
        <div className={styles.socialButtons}>
          <a href="#" className={styles.socialBtn} aria-label="Share on Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className={styles.socialBtn} aria-label="Share on Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className={styles.socialBtn} aria-label="Share on Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className={styles.socialBtn} aria-label="Share on LinkedIn">
            <Linkedin size={20} />
          </a>
          <button className={styles.socialBtn} aria-label="Copy link">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <Image
        src="/images/house.jpg"
        alt="Luxury Villa"
        width={800}
        height={500}
        className={styles.blogImage}
      />

      {/* ✅ Real JSX instead of string */}
      <h2>Key Features of Premium Villas</h2>
      <ul className={styles.customList}>
        <li>Private swimming pools and landscaped gardens</li>
        <li>Smart home automation systems</li>
        <li>Panoramic views of Dubai skyline</li>
        <li>Exclusive gated communities</li>
      </ul>

      <p>
        Each villa is carefully designed with spacious interiors, high ceilings,
        and floor-to-ceiling windows that maximize natural light.
      </p>

      <h2>The Rise of Luxury Villas</h2>
      <p>
        Over the last decade, Dubai has become a global hub for real estate
        investment. With its booming economy, world-class infrastructure, and
        tax-free living, the demand for luxury homes continues to rise.
      </p>

      <blockquote className={styles.blockquote}>
        {"Luxury is not about price—it’s about experience and lifestyle."}
        <span> – Real Estate Expert</span>
      </blockquote>

      <p>
        Over the last decade, Dubai has become a global hub for real estate
        investment. With its booming economy, world-class infrastructure, and
        tax-free living, the demand for luxury homes continues to rise.
      </p>

      <Image
        src="/images/house2.jpg"
        alt="Luxury Villa"
        width={800}
        height={500}
        className={styles.blogImage}
      />
    </article>
  );
};

export default Articles;
