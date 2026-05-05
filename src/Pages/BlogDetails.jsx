import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import BlogDetailsMain from "../Components/Blog/BlogDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function BlogDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Blog Single" />
      <BlogDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default BlogDetails;
