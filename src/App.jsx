import React from 'react';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import { Skills } from './component/Skills';
import { Education } from './component/Education';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import "./index.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      
      <footer className="app-footer">
        © {new Date().getFullYear()} Amit Kumar Portfolio. Built with React & Vanilla CSS.
      </footer>
    </div>
  );
}
