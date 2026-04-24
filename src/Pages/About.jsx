import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import AboutFour from "../Components/About/AboutFour";
import OfferTwo from "../Components/Offer/OfferTwo";
import ElementSection from "../Components/Elements/ElementSection";
import TourGuideTwo from "../Components/Guide/TourGuideTwo";
import TestimonialOne from "../Components/Testimonials/TestimonialOne";
import BrandOne from "../Components/Brand/BrandOne";
import GalleryFive from "../Components/Gallery/GalleryFive";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

function About() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Terra Sardinia" />
      <AboutFour />
      <OfferTwo />
      <ElementSection />
      <TourGuideTwo />
      <TestimonialOne />
      <BrandOne />
      <GalleryFive />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default About;
