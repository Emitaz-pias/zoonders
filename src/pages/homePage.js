import React from 'react'
import DetailsPage from '../component/DetailsPage'
import Footer from '../component/Footer'
import FooterTop from '../component/FooterTop'
import FAQSaction from '../component/FAQSaction'
import HeaderBottom from '../component/HeaderBottom'
import HomeHeader from '../component/HomeHeader'
import Img3D from '../component/Img3D'

const homePage = () => {
    return (
        <>
            <div style={{ backgroundColor:"#00aff0"}}>
                <HomeHeader />
                <HeaderBottom />
                <DetailsPage />
                <Img3D />
                <FAQSaction />
                <FooterTop />
                <Footer />
            </div>
        </>
    )
}

export default homePage
