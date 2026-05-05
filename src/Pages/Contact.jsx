import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import GetInTouch from "../Components/Contact/GetInTouch";
import BookATour from "../Components/Contact/BookATour";
import ContactMap from "../Components/Contact/ContactMap";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Contact() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title="Contact Us"
        bgImage="/assets/img/contact/Banner%20for%20Contact.png"
      />
      <GetInTouch />
      <BookATour />
      <ContactMap />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Contact;
