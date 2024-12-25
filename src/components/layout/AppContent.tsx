import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import { MobileHeader } from '../MobileHeader';
import { MobileNavigation } from '../MobileNavigation';
import { Footer } from '../Footer';
import { MobileFooter } from '../MobileFooter';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { PageWrapper } from './PageWrapper';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Services } from '../../pages/Services';
import { Features } from '../../pages/Features';
import { Blog } from '../../pages/Blog';
import { Contact } from '../Contact';
import { Login } from '../../pages/Login';
import { SignUp } from '../../pages/SignUp';
import { FAQ } from '../../pages/FAQ';
import { motion, AnimatePresence } from 'framer-motion';

export function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen">
        {isMobile ? <MobileHeader /> : <Header />}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/features" element={<Features />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        {isMobile ? <MobileFooter /> : <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </PageWrapper>
  );
}