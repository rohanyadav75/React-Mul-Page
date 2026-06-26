import React from 'react'
import About from './page/About'
import Home from './page/Home'
import Service from './page/Service'
import Contact from './page/Contact'
import SmoothScroll from "smooth-scroll";
import Header from './component/Header'
import Footer from './component/Footer'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                

            </Routes>
            <Footer />
        </Router>

    )
}

export default App
