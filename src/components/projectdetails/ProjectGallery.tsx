
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

import "@/styles/components/projectdetails/ProjectGallery.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface ProjectGalleryProps {
  gallery: string[];
}

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openImage = openIndex !== null ? gallery[openIndex] : null;

  const close = () => setOpenIndex(null);

  const navigate = (direction: number) => {
    setOpenIndex(index =>
        index === null
            ? null
            : (index + direction + gallery.length) % gallery.length
    );
  };

  useEffect(() => {
    if (openIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openIndex, gallery.length, navigate]);

  if (!gallery?.length) return null;

  return (
      <section className="gallery-section">
        <h3 className="section-title">
          {t("projects.project.preview")}
        </h3>

        <div className="gallery-grid">
          {gallery.map((img, index) => (
              <button
                  key={img}
                  type="button"
                  data-cursor="pointer"
                  className={`gallery-item item-${index}`}
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Ouvrir l'image ${index + 1}`}
              >
                <Image
                    src={img}
                    alt={`Vue ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    unoptimized
                />
              </button>
          ))}
        </div>

        {openImage && createPortal(
            <div
                className="gallery-modal"
                role="dialog"
                aria-modal="true"
                onClick={close}
            >
              <button
                  className="gallery-modal__close"
                  onClick={close}
                  aria-label="Fermer"
              >
                <RxCross2 size={32} />
              </button>

              {gallery.length > 1 && (
                  <button
                      className="gallery-modal__nav gallery-modal__nav--left"
                      onClick={e => {
                        e.stopPropagation();
                        navigate(-1);
                      }}
                      aria-label="Image précédente"
                  >
                    <FaChevronLeft size={20} />
                  </button>
              )}

              <div className="gallery-modal__image-wrapper">
                <Image
                    className="gallery-modal__image"
                    src={openImage}
                    alt="Image en grand"
                    onClick={e => e.stopPropagation()}
                    fill
                    sizes="90vw"
                    style={{ objectFit: "contain" }}
                    unoptimized
                />
              </div>

              {gallery.length > 1 && (
                  <button
                      className="gallery-modal__nav gallery-modal__nav--right"
                      onClick={e => {
                        e.stopPropagation();
                        navigate(1);
                      }}
                      aria-label="Image suivante"
                  >
                    <FaChevronRight size={20} />
                  </button>
              )}
            </div>,
            document.body
        )}
      </section>
  );
}
