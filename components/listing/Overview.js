"use client";
import Image from "next/image";
import styles from "../../styles/listing/Overview.module.css";

export default function Overview() {
  return (
    <section id="overview" className={styles.overviewSection}>
      <h3>Overview</h3>
      <p>
        <strong>Nad Al Sheba Gardens Phase 7 by Meraas in Dubai</strong>
        <br />
        Nad Al Sheba Gardens Phase 7, the latest residential project by Meraas
        Developer, introduces a stunning collection of 3-bedroom townhouses and
        4 to 7-bedroom villas in Dubai. This exclusive gated community is a
        perfect blend of luxury, privacy, and tranquility. Designed to redefine
        upscale living, the homes are set amidst lush green landscapes and
        surround a beautiful swimmable lagoon, offering an idyllic retreat for
        families.
      </p>
      <p>
        The residences boast modern architecture featuring open-plan layouts,
        double-height ceilings, and expansive windows that allow for abundant
        natural light and breathtaking views. Thoughtfully curated with unique
        architectural styles, the community reflects timeless elegance and
        sophistication.
      </p>

      <h4>Key Highlights - Nad Al Sheba Gardens Phase 7 by Meraas</h4>
      <ul className={styles.highlightsList}>
        <li>Premium 3-bedroom townhouses and 4 to 7-bedroom villas</li>
        <li>Starting price: AED 4.43M</li>
        <li>Located in Nad Al Sheba, just 10 minutes from Downtown Dubai</li>
        <li>Gated community with lush landscapes and walking trails</li>
        <li>Surrounded by a serene swimmable lagoon</li>
      </ul>

      <div className={styles.overviewImage}>
        <Image
          src="/images/house.jpg"
          alt="Nad Al Sheba Gardens Phase 7"
          width={900}
          height={500}
        />
      </div>
    </section>
  );
}
