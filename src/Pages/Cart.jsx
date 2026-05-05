import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import CartInner from "../Components/Shop/CartInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Cart() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Cart Page" />
      <CartInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Cart;
