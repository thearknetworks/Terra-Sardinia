import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import GalleryInner from "../Components/Gallery/GalleryInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Gallery() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title="Gallery"
        bgImage="/assets/img/gallery/gallery_banner.png"
      />
      <GalleryInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Gallery;
