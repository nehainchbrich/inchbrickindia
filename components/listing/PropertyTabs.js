"use client";
import { useState } from "react";
import styles from "../../styles/listing/Tabs.module.css";

export default function PropertyTabs() {
  const tabs = [
    { id: "description", label: "Description" },
    { id: "amenities", label: "Amenities" },
    { id: "featured-properties", label: "Featured Properties" },
    { id: "overview", label: "Overview" },
    { id: "enquiry", label: "Enquiry" },
  ];

  const [activeTab, setActiveTab] = useState("description");

  return (
      <nav className={styles.propertyTabs}>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={activeTab === tab.id ? styles.active : ""}
                onClick={() => {
                  setActiveTab(tab.id);
                  const section = document.getElementById(tab.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

  );
}
