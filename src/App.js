import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import LatestJobs from  './pages/LatestJobs';


import Partners from './pages/Partners';
import WhyChoose from './pages/WhyChoose'

import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blogs';
import Footer from './components/Footer'; 
import Auth from './pages/Auth';

import CompanyPanel from './pages/CompanyPanel';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-choose-us" element={<WhyChoose />} />

       
        <Route path="/testimonials" element={< Testimonials/>} />
         <Route path="/jobs" element={< LatestJobs/>} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup-login" element={<Auth />} />
        <Route path="/company-dashboard" element={<CompanyPanel />} />
      
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
