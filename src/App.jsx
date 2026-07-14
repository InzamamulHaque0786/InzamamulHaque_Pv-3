import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";
import Contact from "./components/sections/Contact";
import Navbar from './components/layout/Navbar';
import Preloader from './components/ui/Preloader';

const SinglePagePortfolio = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
};

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="relative bg-[var(--bg-base)] text-[var(--text-main)] min-h-screen">
        <Preloader/>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<SinglePagePortfolio />} />
          
          <Route path="*" element={
            <div className="flex h-screen w-screen items-center justify-center flex-col bg-[var(--bg-base)] text-[var(--text-main)]">
              <h1 className="text-5xl font-extrabold tracking-tight text-[var(--brand-primary)] font-mono">404</h1>
              <p className="text-[var(--text-muted)] mt-2">Workspace link invalid or context detached.</p>
              <button 
                onClick={() => window.location.href = '/'}
                className="mt-6 px-4 py-2 text-sm rounded-lg font-medium bg-[var(--brand-primary)] text-[var(--text-inverse)] hover:bg-[var(--brand-hover)] transition-colors cursor-pointer"
              >
                Return to Core Portal
              </button>
            </div>
          } />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;