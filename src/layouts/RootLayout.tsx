import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FloatingNavbar } from '../components/FloatingNavbar';
import { Footer } from '../components/Footer';

export const RootLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1a1f22] selection:bg-[#FEE2E2] selection:text-[#991B1B] relative">

      {isHome ? (
        <Outlet />
      ) : (
        <>
          <FloatingNavbar />
          <main className="flex-grow pt-24 relative z-10">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
