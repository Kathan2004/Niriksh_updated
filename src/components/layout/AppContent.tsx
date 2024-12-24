import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import { MobileHeader } from '../MobileHeader';
import { MobileNavigation } from '../MobileNavigation';
import { Footer } from '../Footer';
import { MobileFooter } from '../MobileFooter';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { PageWrapper } from './PageWrapper';
import { HomeContent } from '../home/HomeContent';
import { About } from '../../pages/About';
import { Services } from '../../pages/Services';
import { Features } from '../../pages/Features';
import { Blog } from '../../pages/Blog';
import { Contact } from '../Contact';
import { Login } from '../../pages/Login';
import { SignUp } from '../../pages/SignUp';

export function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white/95 dark:bg-gray-900/95">
        {isMobile ? <MobileHeader /> : <Header />}
        <main>
          <Routes>
            <Route path="/" element={<HomeContent isMobile={isMobile} />} />
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