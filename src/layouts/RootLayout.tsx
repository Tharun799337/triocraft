import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { FloatingNavbar } from '../components/FloatingNavbar';
import { Footer } from '../components/Footer';

export const RootLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#050508] text-slate-100 selection:bg-amber-500/25 selection:text-amber-300 relative">
      {/* Global 3D Three.js Background Canvas */}
      <ThreeCanvas />

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
