"use client";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Hero.module.css'
// import { Main } from "next/document";
// import localFont from "next/font/local";



// const centuryGothic = localFont({
//   src: [
//     {
//       path: "../public/fonts/CenturyGothicPaneuropeanLight.ttf",
//       weight: "300", // since it's Light
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/CenturyGothicPaneuropeanLight.ttf",
//       weight: "300",
//       style: "normal",
//     },
//   ],
//   variable: "--font-century-gothic", // optional for CSS vars
// });

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
