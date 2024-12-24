import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { MobileHeader } from './components/MobileHeader';
import { MobileNavigation } from './components/MobileNavigation';
import { Hero } from './components/Hero';
import { MobileHero } from './components/MobileHero';
import { Benefits } from './components/Benefits';
import { MobileBenefits } from './components/MobileBenefits';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileFooter } from './components/MobileFooter';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Features } from './pages/Features';
import { Blog } from './pages/Blog';
import { useMediaQuery } from './hooks/useMediaQuery';
import { PageWrapper } from './components/layout/PageWrapper';

function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  function HomeContent() {
    if (isMobile) {
      return (
        <>
          <MobileHero />
          <MobileBenefits />
          <WhyChooseUs />
          <Reviews />
          <Contact />
        </>
      );
    }
    return (
      <>
        <Hero />
        <Benefits />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white/95 dark:bg-gray-900/95">
        {isMobile ? <MobileHeader /> : <Header />}
        <main>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        {isMobile ? <MobileFooter /> : <Footer />}
        {isMobile && isHomePage && <MobileNavigation />}
      </div>
    </PageWrapper>
  );
}