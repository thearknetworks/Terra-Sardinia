import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import WishlistInner from "../Components/Shop/WishlistInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Wishlist() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Wishlist" />
      <WishlistInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Wishlist;
