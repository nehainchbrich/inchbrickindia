"use client";
import styles from "../styles/InvestmentHighlights.module.css";

const highlights = [
  { icon: "₹", value: "50,000", label: "Minimum Investment" },
  { icon: "₹", value: "50,000", label: "Gross Entry Yield" },
  { icon: "%", value: "11.3%", label: "Target IRR" },
  { icon: "×", value: "3.0x", label: "Target Multiple" },
];

export default function InvestmentHighlights() {
  return (
    <section
      className={styles.investmentHighlightsSection}
      style={{ backgroundImage: "url('/images/graph.png')" }}
    >
      <div className={`container ${styles.investmentHighlightsContainer}`}>
        <div className={styles.investmentHighlightsGrid}>
          {highlights.map((item, i) => (
            <div key={i} className={styles.investmentHighlight}>
              <div className={styles.highlightIcon}>
                <span>{item.icon}</span>
              </div>
              <div className={styles.highlightText}>
                <div className={styles.highlightValue}>{item.value}</div>
                <div className={styles.highlightLabel}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
