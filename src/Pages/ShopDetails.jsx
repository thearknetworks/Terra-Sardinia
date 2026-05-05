import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ShopDetailsMain from "../Components/Shop/ShopDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function ShopDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Shop Details" />
      <ShopDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ShopDetails;
