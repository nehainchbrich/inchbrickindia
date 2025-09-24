"use client";
import React from 'react'
import { useState } from "react";
import styles from "../../styles/faq/Style.module.css";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icons

const faqData = [
  {
    question: "How do I schedule a property visit?",
    answer:
      "You can schedule a property visit by contacting our agents through the contact form or calling our office directly. We'll arrange a time that suits you best.",
  },
  {
    question: "Do you offer property investment guidance?",
    answer:
      "Yes! Our experts provide investment consulting to help you choose properties with high ROI, based on your budget and preferences.",
  },
  {
    question: "Can I sell my property through Inch & Brick?",
    answer:
      "Absolutely. We help property owners list, market, and sell their properties at the best value using our professional real estate network.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We offer flexible payment options including bank transfers, financing, and EMI plans for selected properties.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
        <div className={styles.faqBanner}>
             <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          {`Have questions about our properties, services, or investments? We've got you covered.`}
        </p>
        </div>
      <div className="container">
        <div className={styles.faqWrapper}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqCard} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className={styles.faqHeader}>
                <h3>{faq.question}</h3>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div
                className={styles.faqContent}
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
