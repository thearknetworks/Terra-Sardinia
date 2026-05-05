import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import BlogInner from "../Components/Blog/BlogInner";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer/Footer";
import HeaderThree from "../Components/Header/HeaderThree";

function Blog() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Blog Lists View" />
      <BlogInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Blog;
