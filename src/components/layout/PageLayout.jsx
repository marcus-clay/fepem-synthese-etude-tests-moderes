import React from 'react';
import SiteNavigation from './SiteNavigation';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import BackToTopButton from '../ui/BackToTopButton';
import { FEPEM } from '../../design/tokens';

const PageLayout = ({ children }) => (
  <div className="min-h-screen" style={{ background: FEPEM.colors.background }}>
    <ScrollToTop />
    <SiteNavigation />
    <main className="page-enter">{children}</main>
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <Footer />
    </div>
    <BackToTopButton />
  </div>
);

export default PageLayout;
