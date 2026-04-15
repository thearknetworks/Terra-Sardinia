import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourGuideInner from '../Components/Guide/TourGuideInner'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function TourGuide() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Tour Guide"
      />
      <TourGuideInner />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default TourGuide
