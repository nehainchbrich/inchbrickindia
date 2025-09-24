"use client";
import React, { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import styles from "../styles/CitySlider.module.css";

// CONFIG
const AUTOPLAY_DELAY = 3000; // ms between auto-advances
const TRANSITION_DURATION = 400; // transition duration in ms

const cities = [
  { name: "Delhi/NCR", count: "85,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Bangalore", count: "65,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Pune", count: "42,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Mumbai", count: "78,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Hyderabad", count: "39,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Kolkata", count: "28,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Chennai", count: "33,000+ Properties", img: "/images/city-delhi.jpg" },
  { name: "Ahmedabad", count: "22,000+ Properties", img: "/images/city-delhi.jpg" },
];

export default function CitySlider() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const currentRef = useRef(1);

  // Build pages (2 rows x 4 = 8 per page)
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < Math.ceil(cities.length / 8); i++) {
      out.push(cities.slice(i * 8, i * 8 + 8));
    }
    return out;
  }, []);

  const totalPages = pages.length;

  // extended pages = [lastClone, ...pages, firstClone]
  const extendedPages = useMemo(
    () => [pages[totalPages - 1], ...pages, pages[0]],
    [pages, totalPages]
  );

  const [pageWidth, setPageWidth] = useState(0);
  const [current, setCurrent] = useState(1); // index into extendedPages
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // keep ref synced with state to avoid stale closures
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Measure visible width
  const measure = () => {
    const w = wrapperRef.current?.clientWidth || 0;
    setPageWidth(w);
    // keep track transform in sync immediately when measuring
    const track = trackRef.current;
    if (track) {
      track.style.transition = transitionEnabled
        ? `transform ${TRANSITION_DURATION}ms ease-in-out`
        : "none";
      track.style.transform = `translateX(-${currentRef.current * w}px)`;
    }
  };

  useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // intentionally empty deps: we want to measure on mount and on resize only
  }, []);

  // Apply transform when current/pageWidth/transitionEnabled change
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = transitionEnabled
      ? `transform ${TRANSITION_DURATION}ms ease-in-out`
      : "none";
    track.style.transform = `translateX(-${current * pageWidth}px)`;
  }, [current, pageWidth, transitionEnabled]);

  // Autoplay helpers
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = prev + 1;
        currentRef.current = next;
        return next;
      });
    }, AUTOPLAY_DELAY);
  };

  // Start autoplay on mount
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // note: not depending on pageWidth to avoid restarting too frequently
  }, []);

  // Visibility/focus handling — pause timers and self-correct if left on a clone
  useEffect(() => {
    const onVisible = () => {
      measure();

      const cur = currentRef.current;
      if (cur === 0) {
        // snap to last real page without animation
        setTransitionEnabled(false);
        setCurrent(totalPages);
        currentRef.current = totalPages;
        // re-enable after a tick so further transitions animate
        setTimeout(() => setTransitionEnabled(true), 20);
      } else if (cur === totalPages + 1) {
        setTransitionEnabled(false);
        setCurrent(1);
        currentRef.current = 1;
        setTimeout(() => setTransitionEnabled(true), 20);
      }

      // restart autoplay
      startAutoplay();
    };

    const onHidden = () => {
      stopAutoplay();
    };

    const visibilityHandler = () => {
      if (document.hidden) onHidden();
      else onVisible();
    };

    document.addEventListener("visibilitychange", visibilityHandler);
    window.addEventListener("focus", onVisible);
    window.addEventListener("blur", onHidden);

    return () => {
      document.removeEventListener("visibilitychange", visibilityHandler);
      window.removeEventListener("focus", onVisible);
      window.removeEventListener("blur", onHidden);
    };
  }, [totalPages]);

  // Transition-end handler to handle infinite loop snapping
  const handleTransitionEnd = () => {
    const cur = currentRef.current;
    if (cur === totalPages + 1) {
      // moved past last real -> snap to first real (index 1)
      setTransitionEnabled(false);
      setCurrent(1);
      currentRef.current = 1;
      // re-enable transition next tick
      setTimeout(() => setTransitionEnabled(true), 20);
    } else if (cur === 0) {
      // moved before first real -> snap to last real
      setTransitionEnabled(false);
      setCurrent(totalPages);
      currentRef.current = totalPages;
      setTimeout(() => setTransitionEnabled(true), 20);
    }
  };

  // Manual controls
  const nextSlide = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => {
      const next = prev + 1;
      currentRef.current = next;
      return next;
    });
  };
  const prevSlide = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => {
      const next = prev - 1;
      currentRef.current = next;
      return next;
    });
  };

  // Pause/resume on hover
  const pauseAutoplay = () => stopAutoplay();
  const resumeAutoplay = () => startAutoplay();

  return (
    <div className={styles.testimonials} id="testimonials">
      <div className="container">
        <h2 className={styles.title}>Popular Cities</h2>

        <div
          className={styles.sliderWrapper}
          ref={wrapperRef}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div
            className={styles.sliderTrack}
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{ display: "flex" }}
          >
            {extendedPages.map((pageCities, pageIdx) => (
              <div
                className={styles.citySliderPage}
                key={pageIdx}
                style={{ width: pageWidth ? `${pageWidth}px` : "100%", flex: "0 0 auto" }}
              >
                <div className={styles.cityGrid}>
                  {pageCities.map((city, idx) => (
                    <div className={styles.popularCityCard} key={idx}>
                      <Image
                        className={styles.cityImg}
                        src={city.img}
                        alt={city.name}
                        width={600}
                        height={360}
                        // priority={false}
                      />
                      <div className={styles.cityInfo}>
                        <div className={styles.cityName}>{city.name}</div>
                        <div className={styles.cityCount}>{city.count}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next */}
          <button className={`${styles.sliderBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Previous">
            &#10094;
          </button>
          <button className={`${styles.sliderBtn} ${styles.next}`} onClick={nextSlide} aria-label="Next">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

