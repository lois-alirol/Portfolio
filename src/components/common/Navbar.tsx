
"use client";

import React, { useState, useEffect } from "react";
import {useParams, usePathname, useRouter} from "next/navigation";
import { useTranslation } from "react-i18next";

import "@/styles/components/common/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import TransitionLink from "@/components/common/TransitionLink";
import {useTransition} from "@/hook/useTransition";

const SUPPORTED_LANGUAGES = [
  { code: "fr", label: "navbar.languages.fr_FR" },
  { code: "en", label: "navbar.languages.en_US" },
  { code: "es", label: "navbar.languages.es_ES" },
  { code: "de", label: "navbar.languages.de_DE" },
];

const Navbar: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { navigateWithTransition } = useTransition();
  const pathname = usePathname();

  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLangChange = (newLang: string) => {
    if (newLang === lang) return;

    navigateWithTransition(`/${newLang}${pathname.substring(3)}`);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
      <nav className="navbar">
        <TransitionLink
            href={`/${lang}`}
            className="logo"
            data-cursor="pointer"
            onClick={closeMenu}
        >
          LA::<span className="blue-text">main();</span>
        </TransitionLink>

        <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <TransitionLink
              href={`/${lang}/about`}
              className={pathname.includes("/about") ? "current" : ""}
              onClick={closeMenu}
          >
            {t("navbar.sections.about")}
          </TransitionLink>

          <TransitionLink
              href={`/${lang}/projects`}
              className={pathname.includes("/projects") ? "current" : ""}
              onClick={closeMenu}
          >
            {t("navbar.sections.projects")}
          </TransitionLink>

          <TransitionLink
              href={`/${lang}/contact`}
              className={pathname.includes("/contact") ? "current" : ""}
              onClick={closeMenu}
          >
            {t("navbar.sections.contact")}
          </TransitionLink>
        </div>

        <div className="nav-actions">
          <div className="lang-selector">
          <span className="lang-trigger">
            {"// " + lang}
          </span>

            <select
                value={lang}
                onChange={(e) => handleLangChange(e.target.value)}
                className="lang-select"
                aria-label="Select language"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.code} value={language.code}>
                    {t(language.label)}
                  </option>
              ))}
            </select>
          </div>

          <button
              className="icon-btn mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
