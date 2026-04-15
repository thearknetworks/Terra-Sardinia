import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourInner from '../Components/Tour/TourInner'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function Tour() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Popular Tours"
            />
            <TourInner />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Tour
