import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourDetailsMain from '../Components/Tour/TourDetailsMain'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function TourDetails() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Tour Details"
            />
            <TourDetailsMain />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default TourDetails
