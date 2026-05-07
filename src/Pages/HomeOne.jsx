import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import HeaderTwo from "../Components/Header/HeaderTwo";
import HeaderThree from "../Components/Header/HeaderThree";
import BannerOne from "../Components/Banner/BannerOne";
import Booking from "../Components/Booking/Booking";
import CategoryOne from "../Components/Category/CategoryOne";
import DestinationOne from "../Components/Destination/DestinationOne";
import AboutOne from "../Components/About/AboutOne";
import TourOne from "../Components/Tour/TourOne";
import GalleryOne from "../Components/Gallery/GalleryOne";
import CounterOne from "../Components/Counter/CounterOne";
import TourGuide from "../Components/Guide/TourGuide";
import TestimonialOne from "../Components/Testimonials/TestimonialOne";
import BrandOne from "../Components/Brand/BrandOne";
import BlogOne from "../Components/Blog/BlogOne";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import BannerThree from "../Components/Banner/BannerThree";

function HomeOne() {
  return (
    <div>
      <HeaderThree />
      <BannerThree />
      {/* <Booking /> */}
      <CategoryOne />
      <DestinationOne />
      <AboutOne />
      <CounterOne />
      <TourOne />
      <GalleryOne />

      {/* <TourGuide /> */}
      <BrandOne />
      <TestimonialOne />

      {/* <BlogOne /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default HomeOne;
