"use client";
import localFont from "next/font/local";
import "../styles/globals.css"; 
import Layout from "../components/Layouts"; 

const centuryGothic = localFont({
  src: [
    {
      path: "../public/fonts/CenturyGothicPaneuropeanLight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

// ✅ fixed import
function MyApp({ Component, pageProps }) {
  return (
    <main className={centuryGothic.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
}

export default MyApp;
