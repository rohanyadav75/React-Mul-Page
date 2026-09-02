import React from 'react'
import About from './page/About'
import Home from './page/Home'
import Api from './page/Api'
import Service from './page/Service'
import Contact from './page/Contact'
import SmoothScroll from "smooth-scroll";
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import './index.css'
import { Routes, Route } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,

});

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/api" element={<Api/>} />

            </Routes>
            <Footer />
        </>
    )
}

export default App