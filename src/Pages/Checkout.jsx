import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import CheckoutInner from "../Components/Shop/CheckoutInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Checkout() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Checkout" />
      <CheckoutInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Checkout;
