import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import VillaVerdeDetailsInner from '../Components/Resort/ResortDetailsMain'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function ResortDetails() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Resort Details"
            />
            <VillaVerdeDetailsInner />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default ResortDetails
