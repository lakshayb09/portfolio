import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navClass = ({ isActive }) => 
    `px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Lakshay Beesabathini Portfolio
        </span>
        <div className="flex gap-4">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;