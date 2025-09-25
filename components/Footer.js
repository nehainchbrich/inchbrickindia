"use client";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Footer.module.css'


export default function Footer() {
  return (
    <>
    <div className={styles.footerBackground}>
    <div className="container">
      <div className={styles.footerBacklinks}>
        <div>
  <h3>SEO Links</h3>
  <ul className={styles.seoLinksGrid}>
    <li><a href="#">Apartments for Sale in Dubai</a></li>
    <li><a href="#">Villas for Sale in Dubai</a></li>
    <li><a href="#">Townhouses for Sale in Dubai</a></li>
    <li><a href="#">Luxury Properties for Sale</a></li>
    <li><a href="#">Ready to Move Properties</a></li>
    <li><a href="#">Apartments for Rent in Dubai</a></li>
    <li><a href="#">Villas for Rent in Dubai</a></li>
  </ul>
</div>
  <div>
  <h3>SEO Links</h3>
  <ul className={styles.seoLinksGrid}>
    <li><a href="#">Apartments for Sale in Dubai</a></li>
    <li><a href="#">Villas for Sale in Dubai</a></li>
    <li><a href="#">Townhouses for Sale in Dubai</a></li>
    <li><a href="#">Luxury Properties for Sale</a></li>
    <li><a href="#">Ready to Move Properties</a></li>
    <li><a href="#">Apartments for Rent in Dubai</a></li>
    <li><a href="#">Villas for Rent in Dubai</a></li>
  </ul>
</div>
  <div>
  <h3>SEO Links</h3>
  <ul className={styles.seoLinksGrid}>
    <li><a href="#">Apartments for Sale in Dubai</a></li>
    <li><a href="#">Villas for Sale in Dubai</a></li>
    <li><a href="#">Townhouses for Sale in Dubai</a></li>
    <li><a href="#">Luxury Properties for Sale</a></li>
    <li><a href="#">Ready to Move Properties</a></li>
    <li><a href="#">Apartments for Rent in Dubai</a></li>
    <li><a href="#">Villas for Rent in Dubai</a></li>
  </ul>
</div>
  <div>
  <h3>SEO Links</h3>
  <ul className={styles.seoLinksGrid}>
    <li><a href="#">Apartments for Sale in Dubai</a></li>
    <li><a href="#">Villas for Sale in Dubai</a></li>
    <li><a href="#">Townhouses for Sale in Dubai</a></li>
    <li><a href="#">Luxury Properties for Sale</a></li>
    <li><a href="#">Ready to Move Properties</a></li>
    <li><a href="#">Apartments for Rent in Dubai</a></li>
    <li><a href="#">Villas for Rent in Dubai</a></li>
  </ul>
</div>
      </div>
    </div>
    </div>
    <footer className={styles.footerSection}>
      {/* Logo Slider */}
      <div className={styles.footerLogoSliderWrap}>
        <div className={styles.footerLogoSlider}>
          <div className={styles.footerLogoTrack}>
            {Array.from({ length: 16 }).map((_, i) => (
              <Image
                key={i}
                src="/images/logo-develp.png"
                alt={`Logo ${i + 1}`}
                width={100}
                height={50}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBorder}></div>

      {/* Footer Main */}
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerRow}>
            {[1, 2, 3, 4].map((col) => (
              <div className={styles.footerCol} key={col}>
                <h4>Inch &amp; Brick</h4>
                <ul>
                  <li><Link href="#">Our Services</Link></li>
                  <li><Link href="#">Price Trends</Link></li>
                  <li><Link href="#">Post your property</Link></li>
                  <li><Link href="#">Real Estate Envestment</Link></li>
                  <li><Link href="#">Builders in India</Link></li>
                  <li><Link href="#">Area Converter</Link></li>
                  <li><Link href="#">Articles</Link></li>
                  <li><Link href="#">Rent Reciept</Link></li>
                  <li><Link href="#">Customer Service</Link></li>
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottomRow}>
            <div className={styles.footerSocial}>
              <Link href="#" className={styles.socialLink}>
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className={styles.socialLink}>
                <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" className={styles.socialLink}>
                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" className={styles.socialLink}>
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>

            <div className={styles.footerCopyright}>
              {`Copyright | All Rights Reserved. Inch &amp; Brick Realty`}
            </div>
          </div>
        </div>
      </div>
    </footer>
 
    </>
  );
}
