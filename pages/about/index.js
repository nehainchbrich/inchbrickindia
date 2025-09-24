"use client";
import Image from "next/image";
import styles from "../../styles/about/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
        {/* Hero Title */}
        <div className={styles.aboutBanner}>
        <h1 className={styles.title}>About Inch & Brick</h1>
        <p className={styles.subtitle}>
          Where architecture meets lifestyle, and every brick tells a story.
        </p>
        </div>
  <div className="container">
        {/* Intro Story */}
        <div className={styles.intro}>
          <p>
            At <strong>Inch & Brick</strong>, we believe that a property is more
            than just walls and ceilings – it’s a foundation for dreams, 
            memories, and a better tomorrow. With years of experience in 
            real estate development and property consulting, we have 
            positioned ourselves as trusted partners in helping people 
            find not just a house, but a home. 
          </p>
          <p>
            Our portfolio spans luxury residences, smart apartments, 
            commercial hubs, and investment-worthy spaces – all designed 
            with a focus on innovation, sustainability, and community living. 
          </p>
        </div>

        {/* Vision & Mission */}
     
<section className={styles.section}>
      <div className={styles.container}>

        {/* Left Column - full black background */}
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h2>About Our <br/><span className={styles.textColor}>Vision</span></h2>
            <p>
              At Inch & Brick, we are driven by a vision to transform real estate 
              into meaningful experiences. Every goal we set is aligned with 
              building sustainable, luxurious, and community-driven spaces.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
       
          <div className={styles.card}>
            <Image src="/images/goal.png" alt="Goal Icon" width={50} height={50} />
            <h3>Our Mission</h3>
            <p> To redefine modern living by crafting spaces that are elegant, 
              sustainable, and timeless. We aspire to be recognized as the 
              most customer-centric property brand, trusted for transparency 
              and integrity. </p>
          </div>
          <div className={styles.card}>
            <Image src="/images/goal.png" alt="Goal Icon" width={50} height={50} />
            <h3>Our Vision</h3>
            <p>To empower every client with real estate solutions that match 
              their lifestyle, aspirations, and investment goals. From 
              first-time buyers to seasoned investors, our mission is to 
              make every property journey smooth, informed, and rewarding. </p>
          </div>
           <div className={styles.centerImage}>
          <Image 
            src="/images/goal.png" 
            alt="Goal Icon" 
            width={210} 
            height={210} 
          />
        </div>
        </div>

      </div>
    </section>

        {/* Why Choose Us */}
        <div className={styles.whyChoose}>
          <h2>Why Choose Inch & Brick?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image src="/images/trusted.png" alt="Trusted" width={60} height={60}/>
              <h3>Trusted Expertise</h3>
              <p>
                With decades of collective experience, our experts bring 
                deep knowledge of the real estate market to guide your 
                decisions with confidence. 
              </p>
            </div>
            <div className={styles.feature}>
              <Image src="/images/property-icon.png" alt="Design" width={60} height={60}/>
              <h3>Design with Purpose</h3>
              <p>
                Every property we deal with is carefully curated or designed 
                to blend luxury, comfort, and sustainability for modern living. 
              </p>
            </div>
            <div className={styles.feature}>
              <Image src="/images/support.png" alt="Support" width={60} height={60}/>
              <h3>Personalized Support</h3>
              <p>
                We don’t just sell properties; we build long-term 
                relationships by providing tailored guidance at every step. 
              </p>
            </div>
            <div className={styles.feature}>
              <Image src="/images/aproach.jpg" alt="Value" width={60} height={60}/>
              <h3>Value-Driven Approach</h3>
              <p>
                From property scouting to final handover, we ensure 
                transparency, fair pricing, and maximum return on investment. 
              </p>
            </div>
          </div>
        </div>

        {/* Image + Closing Note */}
        <div className={styles.closing}>
          <div className={styles.text}>
            <h2>Our Promise</h2>
            <p>
              At Inch & Brick, we go beyond transactions – we create 
              experiences. Every project we undertake is a step toward 
              shaping better communities, inspiring lifestyles, and 
              delivering properties that stand the test of time. 
            </p>
            <p>
              Whether you’re looking for your dream home, a commercial 
              space, or a strong investment opportunity, we are here 
              to make it possible – inch by inch, brick by brick. 
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/about_bottom_img.png"
              alt="Luxury Property"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}