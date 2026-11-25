
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090a0c]/95 backdrop-blur-md border-b border-gray-800 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />

            <div className="flex flex-col text-right">
              <span className="text-xl sm:text-2xl font-extrabold text-white">عدسة</span>
              <span className="text-xs sm:text-[13px] text-orange-500 font-medium">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center bg-[#18181b] border border-gray-800 rounded-full p-1">

            <NavLink to="/" className={({ isActive }) =>
              `px-5 py-1.5 rounded-full text-sm font-medium ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
              }`
            }>
              الرئيسية
            </NavLink>

            <NavLink to="/blog" className={({ isActive }) =>
              `px-5 py-1.5 rounded-full text-sm font-medium ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
              }`
            }>
              المدونة
            </NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              `px-5 py-1.5 rounded-full text-sm font-medium ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
              }`
            }>
              من نحن
            </NavLink>

          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span className="p-2 text-gray-400">
              <i className="fa-solid fa-magnifying-glass text-base"></i>
            </span>

            <Link to="/blog" className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm">
              ابدأ القراءة
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <span className="p-2 text-gray-400">
              <i className="fa-solid fa-magnifying-glass text-base"></i>
            </span>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-300 hover:text-white border border-gray-800 bg-[#18181b]"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-800 pb-3 flex flex-col gap-1">

            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              <span>الرئيسية</span>
              <i className="fa-solid fa-house text-xs opacity-70"></i>
            </NavLink>

            <NavLink
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              <span>المدونة</span>
              <i className="fa-solid fa-newspaper text-xs opacity-70"></i>
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              <span>من نحن</span>
              <i className="fa-solid fa-circle-info text-xs opacity-70"></i>
            </NavLink>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm"
            >
              ابدأ القراءة
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}
