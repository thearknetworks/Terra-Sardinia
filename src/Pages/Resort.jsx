import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ResortInner from '../Components/Resort/ResortInner'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function Resort() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Resort"
            />
            <ResortInner />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Resort
