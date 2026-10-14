"use client";

import React, { useState, useEffect, useRef } from 'react';
import '@/styles/components/common/Navbar.css';
import { FaRegMoon, FaBars, FaTimes, FaCheck } from 'react-icons/fa';
import { useT } from '@/hooks/useT';
import TransitionLink from '@/components/common/TransitionLink';
import { useTransition } from '@/hooks/useTransition';
import {usePathname} from "next/navigation";

const SUPPORTED_LANGUAGES = [
  { code: 'fr', label: 'navbar.languages.fr_FR' },
  { code: 'en', label: 'navbar.languages.en_US' },
  { code: 'es', label: 'navbar.languages.es_ES' },
  { code: 'de', label: 'navbar.languages.de_DE' },
];

const Navbar: React.FC = () => {
  const { t, changeLanguage, currentLanguage } = useT();
  const { triggerTransition } = useTransition();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLangChange = (lang: string) => {
    if (lang === currentLanguage) return;
    changeLanguage(lang);
  };

  const handleThemeChange = () => {

  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <TransitionLink href={`/${currentLanguage}`} className="logo" data-cursor="pointer" onClick={closeMenu}>
        LA::<span className="blue-text">main();</span>
      </TransitionLink>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <TransitionLink href={`/${currentLanguage}/about`} className={pathname.includes('/about') ? "current" : ""} data-cursor="pointer" onClick={closeMenu}>{t("navbar.sections.about")}</TransitionLink>
        <TransitionLink href={`/${currentLanguage}/projects`} className={pathname.includes('/projects') ? "current" : ""} data-cursor="pointer" onClick={closeMenu}>{t("navbar.sections.projects")}</TransitionLink>
        {/*<TransitionLink href={`/${currentLanguage}/exp`} className={pathname.includes('/exp') ? "current" : ""} data-cursor="pointer" onClick={closeMenu}>{t("navbar.sections.experiences")}</TransitionLink>*/}
        <TransitionLink href={`/${currentLanguage}/contact`} className={pathname.includes('/contact') ? "current" : ""} data-cursor="pointer" onClick={closeMenu}>{t("navbar.sections.contact")}</TransitionLink>
      </div>

      <div className="nav-actions">
        <div className="lang-selector">
          <span className="lang-trigger">
            {'// ' + currentLanguage}
          </span>

          <select
              value={currentLanguage}
              onChange={(e) => handleLangChange(e.target.value)}
              className="lang-select"
              aria-label="Select language"
              data-cursor="pointer"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {t(lang.label)}
                </option>
            ))}
          </select>
        </div>

        {/*
        
        didn't find a proper dark/light mode yet
        todo: implement it

        <button
          className="icon-btn theme-toggle"
          onClick={() => handleThemeChange()}
          aria-label="theme toggle"
          data-cursor="pointer"
        >
          <FaRegMoon size={18} />
        </button>
        
        */}

        <button
          className="icon-btn mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;