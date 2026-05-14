import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import BlogInner from "../Components/Blog/BlogInner";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer/Footer";
import HeaderThree from "../Components/Header/HeaderThree";
import { clipMetaDescription, getSiteOrigin } from "../utils/seo";

function Blog() {
  const { lang } = useParams();
  const base = `/${lang || "en"}`;
  const origin = getSiteOrigin();
  const url = `${origin}${base}/blog`;
  const title = `Blog | Terra Sardinia`;
  const description = clipMetaDescription(
    "News, tips, and stories about travel, stays, and experiences in Sardinia."
  );

  return (
    <>
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
      <Breadcrumb title="Blog Lists View" />
      <BlogInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Blog;
