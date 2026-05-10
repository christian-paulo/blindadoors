"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#sob-medida", label: "Sob Medida" },
  { href: "#modelos", label: "Modelos" },
  { href: "#specs", label: "Tecnologia" },
  { href: "#assistencia", label: "Assistência" },
  { href: "#faq", label: "FAQ" },
];

const MOBILE_LINKS = [
  { href: "#sob-medida", label: "Sob Medida" },
  { href: "#modelos", label: "Modelos" },
  { href: "#specs", label: "Tecnologia" },
  { href: "#personalizar", label: "Acabamentos" },
  { href: "#processo", label: "Processo" },
  { href: "#assistencia", label: "Assistência 24H" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="logo-mark"></span>
            Blinda<span className="accent-text">Doors</span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="nav-cta">
            Orçamento
          </a>
          <button
            className={`menu-toggle${open ? " active" : ""}`}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu-overlay${open ? " active" : ""}`} onClick={close} />
      <aside className={`mobile-menu${open ? " active" : ""}`}>
        <ul>
          {MOBILE_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="primary" onClick={close}>
            Ligar 24H
          </a>
          <a href="#cta" className="secondary" onClick={close}>
            Pedir Orçamento
          </a>
        </div>
      </aside>
    </>
  );
}
