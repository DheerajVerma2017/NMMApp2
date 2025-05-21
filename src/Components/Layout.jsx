/*
// Layout.js
// This component is used to wrap the entire page and apply styles based on the current page
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Get the page name from the path
  const getPageClass = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about-pages';
    if (path === '/contact') return 'contact-pages';
    if (path === '/signup') return 'signup-pages';
    if (path === '/login') return 'login-page';
    if (path === '/dashboard') return 'dashboard-pages';
    if (path === '/services') return 'services-pages';
    return '';
  };

  return (
    <div className={`pages-container ${getPageClass()}`}>
      {children}
    </div>
  );
};

export default Layout;

*/