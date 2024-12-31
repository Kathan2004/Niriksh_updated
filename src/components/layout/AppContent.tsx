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
import { AdminLayout } from '../admin/AdminLayout';
import { AdminHome } from '../../pages/admin/AdminHome';
import { Assets } from '../../pages/admin/Assets';
import { Takedowns } from '../../pages/admin/Takedowns';
import { TakedownDetails } from '../../pages/admin/TakedownDetails';
import { AlertDetails } from '../../pages/admin/AlertDetails';
import { Alerts } from '../../pages/admin/Alerts';
import { Settings } from '../../pages/admin/Settings';
import { Help } from '../../pages/admin/Help';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { motion, AnimatePresence } from 'framer-motion';

export function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <PageWrapper>
      <div className="min-h-screen">
        {!isAdminRoute && (isMobile ? <MobileHeader /> : <Header />)}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            <Routes location={location}>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/features" element={<Features />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Protected Admin Routes */}
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<AdminHome />} />
                <Route path="assets" element={<Assets />} />
                <Route path="alerts" element={<Alerts />} />
                <Route path="alerts/:id" element={<AlertDetails />} />
                <Route path="takedowns" element={<Takedowns />} />
                <Route path="takedowns/:id" element={<TakedownDetails />} />
                <Route path="settings" element={<Settings />} />
                <Route path="help" element={<Help />} />
              </Route>
            </Routes>
          </motion.main>
        </AnimatePresence>
        {!isAdminRoute && (isMobile ? <MobileFooter /> : <Footer />)}
        {!isAdminRoute && isMobile && <MobileNavigation />}
      </div>
    </PageWrapper>
  );
}