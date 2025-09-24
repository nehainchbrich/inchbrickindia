"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const [direction, setDirection] = useState("down"); // "down" or "up"
  const [initialAnim, setInitialAnim] = useState(true); // ✅ track first load

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ Run initial animation (top → bottom)
    setInitialAnim(true);
    const timer = setTimeout(() => setInitialAnim(false), 1000); // stop after 1s

    lastY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const delta = currentY - lastY.current;

      if (Math.abs(delta) > 4) setDirection(delta > 0 ? "down" : "up");

      lastY.current = currentY;

      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          const imgEl = imgRef.current;
          const wrapperEl = wrapperRef.current;
          if (!imgEl || !wrapperEl) {
            ticking.current = false;
            return;
          }

          const wrapperTop = wrapperEl.getBoundingClientRect().top + window.scrollY;
          const relative = window.scrollY - wrapperTop;

          const factor = -0.12;
          const raw = relative * factor;
          const clamp = Math.max(Math.min(raw, 80), -80);

          imgEl.style.setProperty("--parallax", `${clamp}px`);
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.headBanner}>
      <div className="mobile-overlay" id="mobileOverlay"></div>
      <section ref={wrapperRef} className={styles.hero} id="home">
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.dFlex} style={{ alignItems: "center", gap: "20px" }}>
                <div>
                  <h1>
                    Looking for <br /> Dream Home?
                  </h1>
                  <h3>with low price</h3>
                </div>
                <Link href="#services" className={styles.btn}>
                  Book Now
                </Link>
              </div>
            </div>

            {/* heroImage with initial animation on reload */}
            <div
              ref={imgRef}
              className={`${styles.heroImage} ${
                initialAnim
                  ? styles.initialAnim // ✅ runs once
                  : direction === "down"
                  ? styles.scrollDown
                  : styles.scrollUp
              }`}
            >
              <Image
                src="/images/view-3d-house.png"
                alt="Dream Home"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      </div>
  
  );
}
