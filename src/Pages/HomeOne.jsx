import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeaderThree from "../Components/Header/HeaderThree";
import CategoryOne from "../Components/Category/CategoryOne";
import DestinationOne from "../Components/Destination/DestinationOne";
import AboutOne from "../Components/About/AboutOne";
import TourOne from "../Components/Tour/TourOne";
import GalleryOne from "../Components/Gallery/GalleryOne";
import CounterOne from "../Components/Counter/CounterOne";
import BrandOne from "../Components/Brand/BrandOne";
import TestimonialOne from "../Components/Testimonials/TestimonialOne";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import BannerThree from "../Components/Banner/BannerThree";
import { clipMetaDescription, getSiteOrigin } from "../utils/seo";

function HomeOne() {
  const { lang } = useParams();
  const base = `/${lang || "en"}`;
  const origin = getSiteOrigin();
  const url = `${origin}${base}/home`;
  const title = "Terra Sardinia | Stays, tours & experiences";
  const description = clipMetaDescription(
    "Discover Sardinia with Terra Sardinia: curated stays, destinations, services, and travel inspiration.",
  );

  return (
    <div data-seo-ready="1">
      <Helmet htmlAttributes={{ lang: lang || "en" }}>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <HeaderThree />
      <BannerThree />
      <AboutOne />'{/* <Booking /> */}
      <CategoryOne />
      <DestinationOne />
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
