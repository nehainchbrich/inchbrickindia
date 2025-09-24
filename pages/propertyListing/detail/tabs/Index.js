"use client";
import Amenities from "../../../../components/listing/Amenities";
import FeaturedSlider from "../../../../components/listing/FeaturedSlider";
import FullDescription from "../../../../components/listing/FullDescription";
import Overview from "../../../../components/listing/Overview";
import PropertyTabs from "../../../../components/listing/PropertyTabs";
import ReplySection from "../../../../components/listing/ReplySection";


export default function PropertyListing() {
  return (
    <>
      {/* Gallery */}
      <PropertyTabs />

      {/* Sections must have matching IDs */}
      <section id="description"><FullDescription/></section>
      <section id="amenities"><Amenities/></section>
      <section id="featured-properties">
        <FeaturedSlider/>
      </section>
      <section id="overview"><Overview/></section>
      <section id="enquiry"><ReplySection/></section>
    </>
  );
}
