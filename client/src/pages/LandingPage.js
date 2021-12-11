import React from 'react'
import Footer from '../components/footer/Footer'
import Features from '../components/landingpage/Features'
import Hero from '../components/landingpage/Hero'
import LandingNav from '../components/landingpage/LandingNav'


function LandingPage() {
    return (
        <div className="container-fluid">
            <LandingNav />
            This is the landing page
            <Hero />
            <Features />
            <Footer />
        </div>
    )
}

export default LandingPage
