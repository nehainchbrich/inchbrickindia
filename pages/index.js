"use client";
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/style.css'
import Layout from '../components/Layouts'
import Hero from '../components/Banner'
import FindHome from '../components/FindHome'
import PropertySlider from '../components/PropertySlider'
import FeaturedProperties from "../components/FeaturedProperty";
import BrowseCategory from "../components/BrowseCategory";
import ExploreServices from "../components/ExploreServices";
import CitySlider from "../components/CitySlider";
import Gallery from "../components/Gallery";
import PropertySearch from "../components/PropertySearch";

import InvestmentHighlights from "../components/InvestmentHighlight";
export default function Home() {
  return (
    <>
        <Hero/>
        <FindHome/>
        <PropertySlider/>
        <FeaturedProperties/>
        <BrowseCategory/>
        <ExploreServices/>
        <CitySlider/>
        <Gallery/>
        <PropertySearch/>
        <InvestmentHighlights/>
   
    </>
  )
}
